import React from "react";

type LabeledBoxProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
};

const LabeledBox: React.FC<LabeledBoxProps> = ({
  label,
  className,
  children,
}) => (
  <div className={`border-t border-t-sky-900 p-2  ${className}`}>
    <h2 className="text-lg font-medium mb-2">{label}</h2>
    {children}
  </div>
);

export default LabeledBox;
