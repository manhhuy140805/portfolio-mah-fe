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
        "h-12 rounded-md border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-black/30 px-4 text-sm text-zinc-900 dark:text-white outline-none transition placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-(--accent) focus:bg-zinc-200 dark:focus:bg-black/50",
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
