import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "orange" | "white";
  size: "sm" | "md" | "lg";
}
const BasicButton = ({ color, size, disabled, children, onClick }: Props) => {
  const colors = {
    orange: `${disabled ? "bg-disabled" : `bg-${color}`}`,
    white: `border-[1px] border-borderColor`,
  };
  const sizes = {
    sm: `py-2 text-sm min-w-32 md:min-w-24 ${
      color === "white" ? "text-orange" : "text-white"
    }`,
    md: "py-3 text-lg min-w-72 w-full max-w-[520px] text-white",
    lg: "py-5 text-lg min-w-72 w-full max-w-[544px]",
  };

  return (
    <button
      className={`${colors[color]} ${sizes[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BasicButton;
