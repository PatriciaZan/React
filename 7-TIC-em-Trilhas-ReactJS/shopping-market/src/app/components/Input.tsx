import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const inputVariantes = tv({
  base: "rounded bg-gray-200 w-full p-2 outline-none",
});

type InputProps = ComponentProps<"input">;

export default function Input({ onChange, ...props }: InputProps) {
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search . . ."
        className={inputVariantes.base}
        {...props}
      />
    </div>
  );
}
