import React from "react";

const Usage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        Опис використання та параметри
      </h3>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </div>
  );
};

export default Usage;
