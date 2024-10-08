import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error: FieldError | undefined;
};

export default function Input({
  label,
  type,
  placeholder,
  registration,
  error,
}: InputProps) {
  return (
    <main className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="block w-full py-2 px-2 rounded-md border border-gray-300 shadow-sm dark:shadow-white sm:text-sm"
      />
      {error ? <p className="text-red-500 mt-1">{error.message}</p> : null}
    </main>
  );
}
