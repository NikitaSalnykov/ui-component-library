import React from "react";
import clsx from "clsx";

interface PropsSectionContainer {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

interface PropsSection {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<PropsSection> = ({
  id,
  children,
  className,
}) => {
  return (
    <div
      id={id}
      className={clsx(
        "bg-white rounded-lg p-2 md:p-6 shadow-sm w-[350px] md:w-[100%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SectionContainer: React.FC<PropsSectionContainer> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div className={clsx("", className)}>
      <h2 className="text-xl font-medium mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-gray-800 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};
