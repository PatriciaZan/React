import { Children, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const btnVariants = tv({
  variants: {
    variant: {
      primary:
        "w-full rounded bg-blue-500 py-2 px-4 hover:bg-blue-700 hover:text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type PropsButton = ComponentProps<"button"> & VariantProps<typeof btnVariants>;

export default function Button({
  className,
  children,
  variant,
  ...props
}: PropsButton) {
  const classButon = twMerge(btnVariants({ variant }), className);
  return (
    <button className={classButon} {...props}>
      {children}
    </button>
  );
}
