import BasicButton from "@/components/common/button/BasicButton";

interface Props {
  children?: React.ReactNode;
  action: "confirm" | "delete";
  onClick: () => void;
}
const ActionButton = ({ children, action, onClick }: Props) => {
  return (
    <BasicButton
      color={action === "confirm" ? "orange" : "white"}
      size="sm"
      onClick={onClick}
    >
      {children !== undefined
        ? children
        : action === "confirm"
        ? "확인"
        : "삭제"}
    </BasicButton>
  );
};

export default ActionButton;
