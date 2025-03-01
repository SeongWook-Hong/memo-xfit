import { TWod, TPrRecord } from "@/types";
import WodList from "@/components/page/home/contents/WodList";
import PRList from "@/components/page/home/contents/PRList";
import { usePostPR } from "@/hooks/usePR";
interface Props {
  wods: TWod[];
  nickname: string | undefined;
  prs: Array<TPrRecord> | undefined;
}
const Contents = ({ wods, nickname, prs }: Props) => {
  const { mutate } = usePostPR();
  return (
    <div className="flex flex-col gap-10 pt-10">
      <WodList wods={wods} />
      <PRList nickname={nickname} prs={prs} />
      <button
        onClick={() => {
          mutate({
            userId: "67a9b32a1e95c4d5f7070b66",
            records: [{ movement: "Snatch", record: 145, date: "25-02-08" }],
          });
        }}
      >
        sdd
      </button>
    </div>
  );
};
export default Contents;
