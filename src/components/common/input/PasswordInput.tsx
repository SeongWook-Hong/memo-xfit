import { InputHTMLAttributes, useState } from "react";
import BasicInput from "@/components/common/input/BasicInput";
import Visible from "@/assets/icons/visible.svg";
import Unvisible from "@/assets/icons/unvisible.svg";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  register?: UseFormRegisterReturn;
}
const PasswordInput: React.FC<Props> = ({
  register,
  isError,
  errorMsg,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleIconClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <BasicInput
      label="비밀번호"
      type={isVisible ? "text" : "password"}
      placeholder="**********"
      isError={isError}
      errorMsg={errorMsg}
      {...register}
      {...props}
    >
      {isVisible ? (
        <Unvisible
          className="absolute top-11 right-4 cursor-pointer"
          onClick={handleIconClick}
        />
      ) : (
        <Visible
          className="absolute top-11 right-4 cursor-pointer"
          onClick={handleIconClick}
        />
      )}
    </BasicInput>
  );
};
export default PasswordInput;
