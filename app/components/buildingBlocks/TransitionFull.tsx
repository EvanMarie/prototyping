import { forwardRef } from "react";
import Transition, { TransitionType } from "./transition";

const TransitionFull = forwardRef(
  (
    {
      children,
      className,
      type = "fade",
      delay = 0,
      duration = 0.5,
    }: {
      children?: React.ReactNode;
      className?: string;
      type?: TransitionType;
      delay?: number;
      duration?: number;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Transition
        ref={ref} // pass the ref here
        className={`flex w-full justify-center ${className}`}
        type={type}
        delay={delay}
        duration={duration}
      >
        {children}
      </Transition>
    );
  }
);

export default TransitionFull;
