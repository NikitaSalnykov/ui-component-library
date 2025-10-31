
import React, * as React2 from 'react';
import type { FieldValues as FV, UseFormReturn as FR } from './Form.types';


import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import { Radio, RadioGroup } from '../Radio';
import { Badge } from '../Badge';
import clsx from 'clsx';
import { Select } from '../Select';

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
      <div className="pt-1 absolute bottom-[-20px] right-0 border-red-800">
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
    <Field error={err}>
      <Checkbox
        checked={val}
        onChange={(e: any) =>
          form.handleChange(name)(e?.target?.checked ?? !!e)
        }
        containerClassName={className}
        label={label}
        className={clsx(className, err && "border-red-600")}
      />
    </Field>
  );
}

export function SelectField<TValues extends FV>(props: {
  form: FR<TValues>;
  name: keyof TValues & string;
  label?: string;
  className?: string;
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  multiple?: boolean; // делаем опциональным
}) {
  const { form, name, label, placeholder, options, className, multiple = false } = props;

  const raw = form.getValue(name); // TValues[K]
  const err = form.errors[name] as string | undefined;

  if (multiple) {
    // multiple: Select.value должен быть string[], onChange: (v: string[]) => void
    const valueForSelect: string[] = Array.isArray(raw)
      ? (raw as string[])
      : raw != null && raw !== ""
      ? [String(raw)]
      : [];

    const handleChange = (v: string[]) => {
      form.setValue(name as any, v as any); // поле в форме должно быть string[]
    };

    return (
      <Field label={label} error={err}>
        <Select
          multiple
          options={options}
          value={valueForSelect}
          onChange={handleChange}
          placeholder={placeholder}
          className={className}
        />
      </Field>
    );
  } else {
    // single: Select.value это string | null, onChange: (v: string | null) => void
    const valueForSelect: string | null =
      raw === undefined || raw === null || raw === "" ? null : String(raw);

    const handleChange = (v: string | null) => {
      form.setValue(name as any, v as any); // поле в форме: string | null (или string)
    };

    return (
      <Field label={label} error={err}>
        <Select
          options={options}
          value={valueForSelect}
          onChange={handleChange}
          placeholder={placeholder}
          className={className}
        />
      </Field>
    );
  }
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

