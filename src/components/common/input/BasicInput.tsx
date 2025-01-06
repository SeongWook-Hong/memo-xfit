import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  register?: UseFormRegisterReturn;
}
const BasicInput: React.FC<Props> = ({
  label,
  value,
  type,
  placeholder,
  children,
  isError,
  errorMsg,
  register,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-2 max-w-lg min-w-80 relative">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className={`${isError && "border-red"} h-12 p-4`}
        value={value}
        type={type}
        placeholder={placeholder}
        {...register}
        {...props}
      />
      {children}
      <div className="text-xs h-4">
        {isError ? <span className="h-3 text-red">{errorMsg}</span> : <></>}
      </div>
    </div>
  );
};

export default BasicInput;
