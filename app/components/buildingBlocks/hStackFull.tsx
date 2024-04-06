import HStack from "./hStack";

export default function HStackFull({
  children,
  className,
  gap,
  onClick,
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  onClick?: () => void;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <HStack
      className={`w-full ${gap} ${className}`}
      onClick={onClick}
      id={id}
      style={style}
    >
      {children}
    </HStack>
  );
}
