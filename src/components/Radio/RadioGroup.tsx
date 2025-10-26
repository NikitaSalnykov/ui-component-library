import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import type { RadioGroupProps } from "./Radio.types";

interface Ctx {
  name: string;
  value: string | undefined;
  setValue: (v: string) => void;
}

const RadioCtx = createContext<Ctx | null>(null);

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  children,
  className,
  label,
}) => {
  const [internal, setInternal] = useState(defaultValue);
  const id = useId();
  const groupName = name ?? id;

  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const setValue = (v: string) => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  const ctx = useMemo<Ctx>(
    () => ({ name: groupName, value: current, setValue }),
    [groupName, current]
  );

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={clsx("flex flex-col gap-2", className)}
    >
      <RadioCtx.Provider value={ctx}>{children}</RadioCtx.Provider>
    </div>
  );
};

export function useRadioCtx() {
  const ctx = useContext(RadioCtx);
  if (!ctx) throw new Error("Radio must be used with RadioGroup");
  return ctx;
}
