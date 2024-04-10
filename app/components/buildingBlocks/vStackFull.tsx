import VStack from "./vStack";

export default function VStackFull({
  children,
  className,
  gap,
  onClick,
  style = {},
  align = "items-center",
  focusable = true,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  align?: "items-start" | "items-center" | "items-end" | string;
  focusable?: boolean;
}) {
  return (
    <VStack
      className={`w-full ${gap} ${className}`}
      onClick={onClick}
      style={style}
      align={align}
      focusable={focusable}
    >
      {children}
    </VStack>
  );
}
