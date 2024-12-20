import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  errorMsg?: string;
}
const BasicInput = ({
  label,
  value,
  type,
  placeholder,
  children,
  isError,
  errorMsg,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 max-w-lg min-w-80 relative">
      <label className="">{label}</label>
      <input
        className={`${isError && "border-red"} h-12 p-4`}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {children}
      <div className="text-xs h-4">
        {isError ? <span className="h-3 text-red">{errorMsg}</span> : <></>}
      </div>
    </div>
  );
};

export default BasicInput;
