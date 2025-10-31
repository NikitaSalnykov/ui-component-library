import React from "react";
import { Button } from "../../components/Button";
import { ToastProvider, useToast } from "../../components/Toast";

const ToastShowcase: React.FC = () => {
  const { success, error, info, warning, show } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        className="bg-green-800 hover:bg-green-600 active:bg-green-300"
        onClick={() => success("Saved!")}
      >
        Success
      </Button>
      <Button
        className="bg-red-700 hover:bg-red-600 active:bg-red-300"
        onClick={() => error("Oops…")}
      >
        Error
      </Button>
      <Button
        className="bg-blue-600 hover:bg-blue-400 active:bg-blue-300"
        onClick={() => info("Bla-bla-bla")}
      >
        Info
      </Button>
      <Button
        className="bg-yellow-600 hover:bg-yellow-400 active:bg-yellow-200"
        onClick={() => warning("Be careful")}
      >
        Warning
      </Button>
      <Button
        className="bg-purple-600 hover:bg-purple-400 active:bg-purple-300"
        onClick={() =>
          show({
            message: <p>Custome massege 🫠</p>,
            duration: 5000,
            type: "info",
            className: "text-white bg-purple-400",
          })
        }
      >
        Custom
      </Button>
    </div>
  );
}

export default ToastShowcase;
