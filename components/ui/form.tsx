'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { createContext, forwardRef, useContext, useId, useMemo } from 'react';
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export const Form = FormProvider;

export type FormFieldContextValue<T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>> = {
  name?: TName;
};

export const FormFieldContext = createContext<FormFieldContextValue>({});

export const FormField = <T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>>(
  props: ControllerProps<T, TName>
) => {
  const providerValue = useMemo(() => ({ name: props.name }), [props.name]);

  return (
    <FormFieldContext.Provider value={providerValue}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name ?? '', formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};

export type FormItemContextValue = { id?: string };

export const FormItemContext = createContext<FormItemContextValue>({});

export const FormItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function FormItem(
  { className, ...props },
  ref
) {
  const id = useId();
  const providerValue = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={providerValue}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});

export const FormLabel = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(function FormLabel({ className, ...props }, ref) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn('text-lg', 'lg:text-xl', { 'text-red-500 dark:text-red-900': !!error }, className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});

export const FormControl = forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  function FormControl({ ...props }, ref) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  }
);

export const FormDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  function FormDescription({ className, ...props }, ref) {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={cn('text-lg text-neutral-500 dark:text-neutral-400', 'lg:text-xl', className)}
        {...props}
      />
    );
  }
);

export const FormMessage = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  function FormMessage({ className, children, ...props }, ref) {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-base font-medium text-red-500 dark:text-red-900', 'lg:text-xl', className)}
        {...props}
      >
        {body}
      </p>
    );
  }
);
