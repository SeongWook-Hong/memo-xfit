import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError: boolean;
}
const BasicInput = ({
  label,
  value,
  type,
  placeholder,
  isError,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 max-w-lg min-w-80">
      <label className="">{label}</label>
      <input
        className={`${isError && "border-red"} h-12 p-4`}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default BasicInput;
