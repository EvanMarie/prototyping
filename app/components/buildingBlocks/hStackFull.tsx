import HStack from "./hStack";

export default function HStackFull({
  children,
  className,
  gap,
  onClick,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  onClick?: () => void;
  id?: string;
}) {
  return (
    <HStack className={`w-full ${gap} ${className}`} onClick={onClick} id={id}>
      {children}
    </HStack>
  );
}
