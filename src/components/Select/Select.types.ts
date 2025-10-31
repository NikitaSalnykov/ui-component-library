export type SelectOption = { label: string; value: string };

type Common = {
  options: SelectOption[];
  searchable?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export type SelectSingleProps = Common & {
  multiple?: false;             
  value: string | null;
  onChange: (v: string | null) => void;
};

export type SelectMultiProps = Common & {
  multiple: true;
  value: string[];
  onChange: (v: string[]) => void;
};

export type SelectProps = SelectSingleProps | SelectMultiProps;
