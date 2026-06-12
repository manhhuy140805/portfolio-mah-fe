import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      suppressHydrationWarning
      className={[
        "h-12 rounded-md border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[var(--accent)] focus:bg-black/50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
