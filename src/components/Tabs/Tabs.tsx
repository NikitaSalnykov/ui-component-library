import React from "react";
import clsx from "clsx";
import {
  TabsRootProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./Tabs.types";

type Ctx = {
  value: string | undefined;
  setValue: (v: string) => void;
  register: (value: string, ref: HTMLButtonElement | null) => void;
  tabs: string[];
  getRef: (value: string) => HTMLButtonElement | null;
};

const TabsCtx = React.createContext<Ctx | null>(null);

const useTabsCtx = () => {
  const ctx = React.useContext(TabsCtx);
  if (!ctx) throw new Error("use <Tabs.Root>");
  return ctx;
};

const Root: React.FC<TabsRootProps> = ({defaultValue, className, children}) => {
  const [value, setValue] = React.useState<string | undefined>(defaultValue);
  
  const refMap = React.useRef(new Map<string, HTMLButtonElement | null>());
  const tabsRef = React.useRef<string[]>([]);

  const register = (v: string, ref: HTMLButtonElement | null) => {
    if (!tabsRef.current.includes(v)) tabsRef.current.push(v);
    refMap.current.set(v, ref);
  };

  const getRef = (v: string) => {
    const ref = refMap.current.get(v);
    if (!ref) return null;
    return ref;
  }


  return (
    <TabsCtx.Provider value={{
      value,
      setValue,
      register,             
      tabs: tabsRef.current,
      getRef,             
    }}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

const List: React.FC<TabsListProps> = ({ className, children }) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={clsx("inline-flex gap-1 rounded-xl bg-gray-100 p-1", className)}
    >
      {children}
    </div>
  );
}

const Trigger: React.FC<TabsTriggerProps> = ({ value, disabled , className, children }) => {
  const { value: active, setValue, register, tabs, getRef  } = useTabsCtx();
  const isActive = active === value;

  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!disabled) register(value, btnRef.current);
  }, [disabled, register, value]);

  const focusAndActivate = (nextValue: string) => {
    setValue(nextValue);
    getRef(nextValue)?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    console.log(e);
    console.log(value);
    if (disabled) return;

    const code = e.key;
    if (code !== "ArrowLeft" && code !== "ArrowRight" && code !== "Home" && code !== "End")
      return;

    e.preventDefault();

    const idx = tabs.indexOf(value);
    if (idx === -1 || tabs.length === 0) return;

    let nextIdx = idx;
    if (code === "ArrowLeft") nextIdx = (idx - 1 + tabs.length) % tabs.length;
    if (code === "ArrowRight") nextIdx = (idx + 1) % tabs.length;

    const nextValue = tabs[nextIdx];
    if (nextValue) focusAndActivate(nextValue);
  }

  return (
    <button
      type="button"
      role="tab"
     ref={btnRef}
      id={`tab-${value}`}
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      disabled={disabled}
      onClick={() => !disabled && setValue(value)}
      className={clsx(
        "px-3 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        isActive ? "bg-white shadow text-gray-900" : "text-gray-600 hover:bg-white/60",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
}


const Content: React.FC<TabsContentProps> = ({ value, className, children }) => {
  const { value: active } = useTabsCtx();
  const isActive = active === value;

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!isActive}
      className={clsx("mt-3 rounded-xl btabs btabs-gray-200 p-4", className)}
    >
      {isActive && children}
    </div>
  );
}

export const Tabs = {
  Root,
  List,
  Trigger,
  Content,
};