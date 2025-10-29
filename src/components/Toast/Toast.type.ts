export type ToastType = "success" | "error" | "info" | "warning";
export type ToastPosition =
| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left";

export type ToastOptions = {
className?: string;
id?: string;
type?: ToastType;
message: React.ReactNode;
duration?: number; 
};

export type ToastProviderProps = {
  children: React.ReactNode;
  position?: ToastPosition;
  max?: number; 
  duration?: number;
  timer?: number
  className?: string
  };


export type ToastItem =  {
  id: string;
type: ToastType;
message: React.ReactNode;
  duration: number;
  createdAt: number;
  timer?: number;
  className?: string

  };

  