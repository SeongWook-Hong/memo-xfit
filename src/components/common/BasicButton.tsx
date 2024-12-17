import { ButtonHTMLAttributes } from "react";

type Color = "orange" | "white";
type Size = "sm" | "md" | "lg";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
  size: Size;
}
const BasicButton = ({ disabled, color, size, children, onClick }: Props) => {
  const sizes = {
    sm: "py-2 text-sm min-w-32 md:min-w-24",
    md: "py-3 text-lg min-w-72 w-full max-w-[520px]",
    lg: "py-5 text-lg min-w-72 w-full max-w-[544px]",
  };
  const colors = {
    orange: `${disabled ? "bg-gray" : `bg-${color}`}`,
    white: `border-[1px] bg-${color} border-gray ${
      size === "lg" ? "text-black" : "text-orange"
    } `,
  };

  return (
    <button
      className={`rounded-md ${colors[color]} ${sizes[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BasicButton;
