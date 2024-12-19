import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;
export default function Input({ label, id }: InputProps) {
  return (
    <p>
      <label htmlFor={id}> {label} </label>
      <input id={id} type="text" />
    </p>
  );
}
