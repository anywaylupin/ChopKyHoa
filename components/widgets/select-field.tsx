import type { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

type SelectFieldProps<T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>> = Readonly<{
  options: { value: string; text: string }[];
  placeholder: string;
  field: ControllerRenderProps<T, TName>;
}>;

export function SelectField<T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>>({
  options,
  placeholder,
  field
}: SelectFieldProps<T, TName>) {
  return (
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
}
