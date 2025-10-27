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
};

const TabsCtx = React.createContext<Ctx | null>(null);

const useTabsCtx = () => {
  const ctx = React.useContext(TabsCtx);
  if (!ctx) throw new Error("Use Tabs components inside <Tabs.Root>");
  return ctx;
};

const Root: React.FC<TabsRootProps> = ({defaultValue, className, children}) => {
  const [value, setValue] = React.useState<string | undefined>(defaultValue);

  return (
    <TabsCtx.Provider value={{ value, setValue }}>
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

const Trigger: React.FC<TabsTriggerProps> = ({ value, disabled, className, children }) => {
  const { value: active, setValue } = useTabsCtx();
  const isActive = active === value;

  return (
    <button
      type="button"
      role="tab"
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
      className={clsx("mt-3 rounded-xl border border-gray-200 p-4", className)}
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