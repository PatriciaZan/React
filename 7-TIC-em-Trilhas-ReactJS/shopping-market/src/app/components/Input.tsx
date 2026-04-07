import { tv } from "tailwind-variants";

const inputVariantes = tv({
  base: "rounded bg-gray-200 w-full p-2 outline-none",
});

export default function Input() {
  return (
    <div>
      <input
        type="text"
        placeholder="Seacrh . . ."
        className={inputVariantes.base}
      />
    </div>
  );
}
