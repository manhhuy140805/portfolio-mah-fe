import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light" | "ghost";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  SharedButtonProps & {
  href?: never;
};

type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> &
  SharedButtonProps & {
  href: string;
};

const baseButtonClassName =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[var(--accent)] text-white shadow-[0_0_30px_rgba(47,47,228,0.25)] hover:bg-[var(--background)] hover:border-[var(--accent)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)]",
  light:
    "border border-zinc-950/15 bg-white text-zinc-950 hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost: "text-zinc-300 hover:bg-white/5 hover:text-white",
};

function getButtonClassName(variant: ButtonVariant, className?: string) {
  return [baseButtonClassName, variantClassNames[variant], className]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps | LinkButtonProps) {
  if (typeof props.href === "string") {
    const {
      children,
      className,
      href,
      variant = "primary",
      ...linkProps
    } = props;

    return (
      <Link
        className={getButtonClassName(variant, className)}
        href={href}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    className,
    type = "button",
    variant = "primary",
    ...buttonProps
  } = props;

  return (
    <button
      suppressHydrationWarning
      className={getButtonClassName(variant, className)}
      type={type}
      {...buttonProps}
    />
  );
}
