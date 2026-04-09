import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariantes = tv({
  base: "rounded w-full p-2 outline-none",
  variants: {
    variant: {
      primary: "bg-gray-200",
      secundary: "bg-white",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputVariantes>;

export default function Input({
  onChange,
  variant,
  className,
  ...props
}: InputProps) {
  const classInput = twMerge(inputVariantes({ variant }), className);
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search . . ."
        className={classInput}
        {...props}
      />
    </div>
  );
}
