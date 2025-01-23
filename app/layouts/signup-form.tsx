'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { z } from 'zod';

import { IconCircleCheckFilled } from '@/components/icons';
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
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

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

export type FormSchema = z.infer<typeof formSchema>;

const FormFieldComponent = ({ field, control }: { field: FormField; control: Control<FormSchema> }) => (
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
            {/* {field.type === 'select' && field.options && (
              <SelectField options={field.options} placeholder={field.placeholder} field={formField} />
            )} */}
            {field.type === 'textarea' && <Textarea {...formField} placeholder={field.placeholder} />}
          </>
        </FormControl>
      </FormItem>
    )}
  />
);

export const FormContainer = ({ onSubmit }: { onSubmit: (values: FormSchema) => Promise<void> | void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formLocalization.fields.reduce<Record<string, string>>((defaults, field) => {
      defaults[field.name] = '';
      return defaults;
    }, {})
  });

  const handleSubmit = async (values: FormSchema) => {
    try {
      setIsLoading(true);

      await onSubmit(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <FormLoading />
  ) : (
    <div className="relative flex size-full">
      <motion.div
        className={cn('relative flex size-full flex-col gap-4', 'lg:gap-8')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h3 className={cn('text-base font-bold text-neutral-800 dark:text-neutral-200', 'lg:text-2xl')}>
          {formLocalization.heading}
        </h3>
        <Form {...form}>
          <form
            className={cn('flex size-full max-h-full flex-col justify-between gap-4', 'sm:gap-8', 'xl:gap-0')}
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            {formLocalization.fields.map((field) => (
              <FormFieldComponent key={field.name} field={field} control={form.control} />
            ))}

            <Button
              className="rounded-md border-2 border-transparent bg-dark px-8 py-2 text-xl font-bold text-white transition-all duration-200 hover:border-dark hover:bg-white hover:text-2xl hover:text-black"
              type="submit"
            >
              {formLocalization.submit}
              <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
              <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export const FormSuccess = () => (
  <div className="relative flex size-full flex-col items-center justify-center gap-5">
    <motion.div
      className="flex max-w-32 md:max-w-max"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3, ease: 'backOut' }}
    >
      <IconCircleCheckFilled color="var(--dark)" />
    </motion.div>
    <motion.span
      className="text-center text-lg sm:text-2xl md:text-4xl"
      initial={{ y: '-10%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-10%', opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {formLocalization.success}
    </motion.span>
  </div>
);

export const FormLoading = () => (
  <div className="relative flex size-full items-center justify-center gap-4">
    {['delay-0', 'delay-100', 'delay-200'].map((delay, i) => (
      <motion.div
        key={`${delay}-${i}`}
        className="relative flex"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3, ease: 'backOut' }}
      >
        <span className={cn('tennis-ball animate-loading bg-primary', delay)}></span>
      </motion.div>
    ))}
  </div>
);
