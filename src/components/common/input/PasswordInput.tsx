import { useState } from "react";
import BasicInput from "@/components/common/input/BasicInput";
import Visible from "@/assets/icons/visible.svg";
import Unvisible from "@/assets/icons/unvisible.svg";

interface Props {
  isError: boolean;
  errorMsg: string;
  onChange: () => void;
}
const PasswordInput = ({ isError, errorMsg, onChange }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleIconClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <BasicInput
      label="비밀번호"
      type={isVisible ? "text" : "password"}
      isError={isError}
      errorMsg={errorMsg}
      onChange={onChange}
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
