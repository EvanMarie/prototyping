import React from "react";

interface VStackProps {
  children?: React.ReactNode;
  gap?: string;
  style?: React.CSSProperties;
  align?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  focusable?: boolean; // New prop to control focusability
}

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  (
    {
      children,
      gap = "gap-2",
      className = "",
      style = {},
      align = "items-center",
      onClick,
      focusable = true, // Default value is true
    },
    ref
  ) => {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col ${align} ${gap} ${className}`}
        ref={ref}
        style={style}
        tabIndex={focusable ? 0 : -1} // Conditionally apply tabindex based on focusable prop
      >
        {children}
      </div>
    );
  }
);

VStack.displayName = "VStack";

export default VStack;
