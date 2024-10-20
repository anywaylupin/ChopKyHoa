import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type SelectFieldProps<T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>> = {
  options: { value: string; text: string }[];
  placeholder: string;
  field: ControllerRenderProps<T, TName>;
};

export const SelectField = <T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>>({
  options,
  placeholder,
  field
}: SelectFieldProps<T, TName>) => (
  <Select defaultValue={field.value} onValueChange={field.onChange}>
    <SelectTrigger className="w-full text-base">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map(({ value, text }) => (
        <SelectItem key={value} value={value} className="text-base">
          {text}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
