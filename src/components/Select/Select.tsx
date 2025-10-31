import React from "react";
import clsx from "clsx";
import type { SelectProps, SelectOption } from "./Select.types";
import { Badge } from "../Badge";

export const Select: React.FC<SelectProps> = (props) => {
  const {
    options,
    searchable = true,
    placeholder = "Select…",
    disabled,
    className,
    multiple, 
    value
  } = props

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);


  function clearSearch() {
    setSearch("");
  }

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false)
        console.log('close');
        clearSearch()  
      };
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);  // закрытие по клику вне

  const query = search.trim().toLowerCase();

  const filtered: SelectOption[] = query
    ? options.filter(o => o.label.toLowerCase().includes(query))
    : options;

  // выбранный текст
  let display: React.ReactNode = <span className="text-gray-400">{placeholder}</span>;

  if (multiple) {
    const labels = value
      .map(v => options.find(option => option.value === v)?.label || v);
    display = labels.length > 0 ? (
      <span className="flex flex-wrap gap-1">
        {labels.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5"
          >
            {t}
          </span>
        ))}
      </span>
    ) : (
      <span className="text-gray-400">{placeholder}</span>
    );
  } else {
    const label = options.find(o => o.value === value)?.label;
    if (label) display = <span>{label}</span>;
  }

  function isSelected(v: string) {
    return multiple
      ? value.includes(v)
      : value === v;
  }

;

  // добавить убрать из мульти
  function toggleValue(option: SelectOption) {
    if (multiple) {
      const exists = value.includes(option.value);
      const next = exists
        ? value.filter(v => v !== option.value)
        : [...props.value, option.value];
      props.onChange(next);
    } else {
      props.onChange(option.value);
      setOpen(false);
    }
  }


  return (
    <div ref={rootRef} className={clsx("relative", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(o => !o)}
        className={clsx(
          "w-full h-10 px-3 rounded-md border transition text-left",
          "border-gray-300 bg-white hover:border-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500/30",
          disabled && "opacity-60 cursor-not-allowed"
        )}
        aria-expanded={open}
      >
        {display}
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          {searchable && (
            <div className="p-2 border-b">
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Пошук…"
                className="w-full h-9 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                autoFocus
              />
            </div>
          )}

          <ul className="max-h-56 overflow-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-gray-500">
                {`"${search}" not found`}
              </li>
            ) : (
              filtered.map(opt => {
                const selected = isSelected(opt.value);
                console.log(value)
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={selected}
                    className={clsx(
                      "px-3 py-2 text-sm cursor-pointer flex items-center justify-between",
                      "hover:bg-indigo-50"
                    )}
                    onClick={() => toggleValue(opt)}
                  >
                    <span>{opt.label}</span>
                    {selected && <Badge variant="success" rounded="full">Selected</Badge>}
                  </li>
                );
              })
            )}
          </ul>

          {props.multiple && (
            <div className="p-2 border-t flex items-center gap-2 justify-end">
              <button
                type="button"
                className="text-xs px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                onClick={() => {
                  props.onChange([]); 
                  clearSearch();
                }}
              >
                Очистити
              </button>
              <button
                type="button"
                className="text-xs px-2 py-1 rounded border border-indigo-600 text-indigo-700 hover:bg-indigo-50"
                onClick={() => setOpen(false)}
              >
                Готово
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
