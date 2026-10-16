
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-ivory hover:bg-navy-light",
  secondary:
    "bg-gold text-navy hover:bg-gold-light",
  outline:
    "border border-line text-navy hover:border-gold hover:bg-white",
};

export default function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center gap-2",
        "min-h-12 px-6 py-3",
        "text-sm font-medium tracking-wide",
        "transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        "disabled:opacity-50",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
