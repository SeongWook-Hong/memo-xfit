import BasicButton from "@/components/common/button/BasicButton";

interface Props {
  sign: "in" | "up";
  isDisabled: boolean;
  onClick: () => void;
}
const SignButton = ({ sign, isDisabled, onClick }: Props) => {
  const text = sign === "in" ? "로그인" : "회원가입";
  return (
    <BasicButton
      color="orange"
      size="md"
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </BasicButton>
  );
};

export default SignButton;
