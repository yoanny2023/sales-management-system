"use client";

import Select from "../ui/Select";

type FormSelectProps = React.ComponentProps<"select"> & {
  label: string;
  error?: string;
};

function FormSelect({
  label,
  id,
  error,
  children,
  ...props
}: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm tracking-wide text-zinc-400 cursor-pointer"
      >
        {label}
      </label>

      <Select id={id} {...props}>
        {children}
      </Select>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormSelect;