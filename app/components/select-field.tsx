import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export interface SelectFieldProps {
  options: { value: string; text: string }[];
  placeholder: string;
  field: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({ options, placeholder, field }) => (
  <Select {...field}>
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
