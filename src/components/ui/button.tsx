import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn",
          {
            "btn-primary": variant === "primary",
            "btn-outline": variant === "outline",
            "btn-ghost": variant === "ghost",
            "btn-link": variant === "link",
            "text-sm px-3 py-1.5": size === "sm",
            "text-base px-4 py-2": size === "md",
            "text-lg px-5 py-3": size === "lg",
            "p-2": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";