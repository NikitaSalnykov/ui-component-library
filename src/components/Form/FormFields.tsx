
import * as React2 from 'react';
import type { FieldValues as FV, UseFormReturn as FR } from './Form.types';


import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import { Radio, RadioGroup } from '../Radio';
import { Badge } from '../Badge';
import clsx from 'clsx';

//обёртка +бейдж ошибки
const Field: React2.FC<{
  label?: string;
  error?: string;
  children: React2.ReactNode;
}> = ({ label, error, children }) => (
  <div className="flex flex-col gap-1 relative">
    {label && <label className="text-sm font-medium">{label}</label>}
    {children}
    {error && (
      <div className="pt-1 absolute bottom-[-25px] right-0">
        <Badge variant="danger">{error}</Badge>
      </div>
    )}
  </div>
);

// text/email/number (универсальный)
export function InputField<TValues extends FV>(props: {
  form: FR<TValues>;
  name: keyof TValues & string;
  label?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  className?: string;
}) {
  const { form, name, label, type = 'text', placeholder, className } = props;
  const val = form.getValue(name);
  const err = form.errors[name] as string | undefined;

  return (
    <Field label={label} error={err}>
      <Input
        value={String(val ?? '')}
        type={type}
        placeholder={placeholder}
        className={clsx(className, err && "border-red-600")}
       
        onChange={(e: any) => form.handleChange(name)(e?.target?.value ?? e)} // или значение или событие
      />
    </Field>
  );
}

// булевое значение
export function CheckboxField<TValues extends FV>(props: {
  form: FR<TValues>;
  name: keyof TValues & string;
  label?: string;
  className?: string;
}) {
  const { form, name, label, className } = props;
  const val = Boolean(form.getValue(name));
  const err = form.errors[name] as string | undefined;

  return (
    <Field label={label} error={err}>
      <Checkbox
        checked={val}
        onChange={(e: any) =>
          form.handleChange(name)(e?.target?.checked ?? !!e)
        }
        containerClassName={className}
        label=""
      />
    </Field>
  );
}

//  options
export function RadioGroupField<TValues extends FV>(props: {
  form: FR<TValues>;
  name: keyof TValues & string;
  label?: string;
  options: Array<{ label: string; value: string }>;
  className?: string;
}) {
  const { form, name, label, options, className } = props;
  const val = (form.getValue(name) as string) ?? '';
  const err = form.errors[name] as string | undefined;

  return (
    <Field label={label} error={err}>
      <RadioGroup
        value={val}
        onChange={(v: string) => form.setValue(name, v)}
        className={className}
      >
        {options.map(o => (
          <Radio key={o.value} value={o.value} label={o.label} />
        ))}
      </RadioGroup>
    </Field>
  );
}

