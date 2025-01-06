import ActionButton from "@/components/common/button/ActionButton";

interface Props {
  onClickAccept: () => void;
  onClickReject: () => void;
}
const ResponseButton = ({ onClickAccept, onClickReject }: Props) => {
  return (
    <div className="flex gap-2">
      <ActionButton action="confirm" onClick={onClickAccept}>
        수락
      </ActionButton>
      <ActionButton action="delete" onClick={onClickReject}>
        거절
      </ActionButton>
    </div>
  );
};

export default ResponseButton;
