/// хук + обертка форм

import * as React from 'react';
import type {
  FieldValues,
  RulesMap,
  Errors,
  UseFormReturn,
} from './Form.types';


//useForm<TValues>
// TValues -- определ. при вызове useForm<YourType>()

export function useForm<TValues extends FieldValues>(
  initialValues: TValues,
  rules?: RulesMap<TValues>
): UseFormReturn<TValues> {

  const [values, setValues] = React.useState<TValues>(initialValues);
  const [errors, setErrors] = React.useState<Errors<TValues>>({});

  // setValue обновление по назв
  const setValue = React.useCallback(
    (name: keyof TValues & string, v: unknown) => {
      setValues(prev => ({ ...prev, [name]: v }) as TValues);
    },
    []
  );

  // getValue получить по назв
  const getValue = React.useCallback(
    <K extends keyof TValues & string>(name: K) => {
      return (values as Record<string, unknown>)[name] as TValues[K];
    },
    [values]
  );

  // handleChange - фабрика onChange: удобно привязывать к конкретному name
  const handleChange = React.useCallback(
    (name: keyof TValues & string) => {
      return (next: unknown) => setValue(name, next);
    },
    [setValue]
  );

  // validateAll проверка по рулс
  const validateAll = React.useCallback(() => {
    const nextErrors: Errors<TValues> = {};
    if (!rules) return nextErrors;

    for (const key of Object.keys(rules) as Array<keyof TValues & string>) {
      const value = (values as Record<string, unknown>)[key];
      const r = rules[key];
      if (!r) continue;

      // required
      if (r.required) {
        const msg =
          typeof r.required === 'string' ? r.required : 'Це поле обовʼязкове';
      
        const empty =
          value === undefined ||
          value === null ||
          (typeof value === 'string' && value.trim() === '') ||
          (Array.isArray(value) && value.length === 0) ||
          // 🔧 ключевая правка — убрали "&& r.required === true"
          (typeof value === 'boolean' && value === false);
      
        if (empty) {
          (nextErrors as Record<string, string>)[key] = msg;
          continue;
        }
      }

      // minLen 
      if (typeof r.minLen === 'number' && typeof value === 'string') {
        if (value.trim().length < r.minLen) {
          (nextErrors as Record<string, string>)[key] =
            `Мінімум ${r.minLen} символів`;
          continue;
        }
      }

      // email 
      if (r.email && typeof value === 'string') {
        const msg = typeof r.email === 'string' ? r.email : 'Некоректний email';
        const ok = /\S+@\S+\.\S+/.test(value);
        if (!ok) {
          (nextErrors as Record<string, string>)[key] = msg;
          continue;
        }
      }
    }

    return nextErrors;
  }, [rules, values]);

  // handleSubmit - валидация не ошибок вызвается кл-бк
  const handleSubmit = React.useCallback(
    (fn: (vals: TValues) => void) => {
      return (e?: React.FormEvent) => {
        e?.preventDefault();
        const errs = validateAll();
        setErrors(errs);
        const hasError = Object.values(errs).some(Boolean);
        if (!hasError) fn(values);
      };
    },
    [validateAll, values]
  );

  // reset 
  const reset = React.useCallback((next?: Partial<TValues>) => {
    setValues(prev => ({ ...prev, ...(next ?? {}) }) as TValues);
    setErrors({});
  }, []);

  return {
    values,
    errors,
    setValue,
    getValue,
    handleChange,
    handleSubmit,
    reset,
  };
}

export function Form<TValues extends FieldValues>(props: {
  form: UseFormReturn<TValues>;
  onSubmit?: (vals: TValues) => void;
  className?: string;
  children: React.ReactNode;
}) {
  const { form, onSubmit, className, children } = props;
  return (
    <form
      onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
      className={className}
    >
      {children}
    </form>
  );
}
