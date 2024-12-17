import { ButtonHTMLAttributes } from "react";

type Color = "orange" | "gray" | "white";
type Size = "sm" | "md" | "lg";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
  size: Size;
}

const BasicButton = ({ color, size, children, onClick }: Props) => {
  const sizes = {
    sm: `py-2 text-sm min-w-32 md:min-w-24`,
    md: `py-3 text-lg min-w-72 w-full max-w-[520px]`,
    lg: `py-5 text-lg min-w-72 w-full max-w-[544px]`,
  };

  return (
    <button
      className={`rounded-md bg-${color} ${sizes[size]} ${
        color === "white" ? "border-[1px] border-gray text-orange" : ""
      } ${size === "lg" ? "text-black" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BasicButton;
