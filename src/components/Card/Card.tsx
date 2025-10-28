import React from "react";

export const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default Card;
