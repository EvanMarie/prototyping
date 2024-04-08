import React from "react";

interface HStackProps {
  children?: React.ReactNode;
  gap?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  id?: string;
  hoverCursor?: string;
}

// Use React.forwardRef to forward the ref to the div element
const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  (
    {
      children,
      onClick = () => ({}),
      onKeyDown,
      gap = "gap-2",
      className = "",
      style = {},
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      id,
      hoverCursor = "hover:cursor-default",
    },
    ref
  ) => {
    return (
      <div
        role="button"
        tabIndex={0}
        className={`flex flex-row ${gap} ${className} ${hoverCursor}`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={ref}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
      >
        {children}
      </div>
    );
  }
);

HStack.displayName = "HStack"; // Assigning a display name for debugging purposes

export default HStack;
