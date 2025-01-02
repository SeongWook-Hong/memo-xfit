import BasicButton from "@/components/common/button/BasicButton";

interface Props {
  sign: "in" | "up";
  isDisabled: boolean;
}
const SignButton = ({ sign, isDisabled }: Props) => {
  const text = sign === "in" ? "로그인" : "회원가입";
  return (
    <BasicButton color="orange" size="md" disabled={isDisabled}>
      {text}
    </BasicButton>
  );
};

export default SignButton;
