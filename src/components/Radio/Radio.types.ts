export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'checked' | 'defaultChecked'> {
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  label?: string;
}
