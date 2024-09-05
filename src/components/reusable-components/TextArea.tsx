import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextAreaProps = {
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error: FieldError | undefined;
};

export default function TextArea({
  label,
  placeholder,
  registration,
  error,
}: TextAreaProps) {
  return (
    <main className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        placeholder={placeholder}
        {...registration}
        rows={4}
        className="block w-full py-2 px-2 rounded-md border border-gray-300 shadow-sm dark:shadow-white sm:text-sm"
      />
      {error ? <p className="text-red-500 mt-1">{error.message}</p> : null}
    </main>
  );
}
