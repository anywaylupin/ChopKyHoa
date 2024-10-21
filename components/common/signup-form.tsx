'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Control, useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea
} from '@/components/ui';
import locales from '@/locales/vn.json';

import { SelectField } from './select-field';

const formLocalization = locales.pages.contact.form;

type FormField = (typeof formLocalization.fields)[number];

const fieldValidationRules: Record<FormField['type'], (required: boolean, error?: string) => z.ZodTypeAny> = {
  text: (required, error) => (required ? z.string().min(2, { message: error }) : z.string().optional()),
  textarea: (required, error) => (required ? z.string().min(5, { message: error }) : z.string().optional()),
  select: (required, error) => (required ? z.string().min(1, { message: error }) : z.string().optional())
};

const formSchema = z.object(
  formLocalization.fields.reduce<Record<string, z.ZodTypeAny>>((schema, field) => {
    const validationRule = fieldValidationRules[field.type];
    schema[field.name] = validationRule(field.required, field.error);
    return schema;
  }, {})
);

type SignupFormValues = z.infer<typeof formSchema>;

const FormFieldComponent = ({ field, control }: { field: FormField; control: Control<SignupFormValues> }) => (
  <FormField
    control={control}
    name={field.name}
    render={({ field: formField, fieldState }) => (
      <FormItem>
        <div className="flex items-center justify-between">
          <FormLabel>{field.label}</FormLabel>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </div>
        <FormControl>
          <>
            {field.type === 'text' && <Input {...formField} placeholder={field.placeholder} />}
            {field.type === 'select' && field.options && (
              <SelectField options={field.options} placeholder={field.placeholder} field={formField} />
            )}
            {field.type === 'textarea' && <Textarea {...formField} placeholder={field.placeholder} />}
          </>
        </FormControl>
      </FormItem>
    )}
  />
);

export const FormContainer = ({ setSubmitted }: { setSubmitted: DispatchState }) => {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formLocalization.fields.reduce<Record<string, string>>((defaults, field) => {
      defaults[field.name] = '';
      return defaults;
    }, {})
  });

  const onSubmit = async (values: SignupFormValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    }
  };

  return (
    <>
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">{formLocalization.heading}</h3>
      <Form {...form}>
        <form className="flex size-full max-h-full flex-col justify-between" onSubmit={form.handleSubmit(onSubmit)}>
          {formLocalization.fields.map((field) => (
            <FormFieldComponent key={field.name} field={field} control={form.control} />
          ))}

          <Button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {formLocalization.submit}
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
          </Button>
        </form>
      </Form>
    </>
  );
};

export const FormSuccess = () => (
  <motion.div className="relative flex size-full flex-col items-center justify-center gap-5">
    <IconCircleCheckFilled size={160} color="var(--dark)" />
    <span className="text-center text-4xl">{formLocalization.success}</span>
  </motion.div>
);
