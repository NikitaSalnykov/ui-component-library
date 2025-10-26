export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (next: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  containerClassName?: string;
}
