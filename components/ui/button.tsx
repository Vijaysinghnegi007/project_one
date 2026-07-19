import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-active",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        outline:
          "border border-border bg-transparent hover:bg-muted",

        ghost:
          "bg-transparent hover:bg-muted",

        destructive:
          "bg-destructive text-white hover:opacity-90",

        link:
          "bg-transparent p-0 text-primary underline-offset-4 hover:underline",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        default: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        icon: "size-11 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}