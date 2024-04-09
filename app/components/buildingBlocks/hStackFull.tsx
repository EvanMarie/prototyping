import HStack from "./hStack";

export default function HStackFull({
  children,
  className,
  gap,
  onClick,
  id,
  style,
  hoverCursor,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  onClick?: () => void;
  id?: string;
  style?: React.CSSProperties;
  hoverCursor?: string;
}) {
  return (
    <HStack
      className={`w-full ${gap} ${className}`}
      onClick={onClick}
      id={id}
      hoverCursor={hoverCursor}
      style={style}
    >
      {children}
    </HStack>
  );
}
