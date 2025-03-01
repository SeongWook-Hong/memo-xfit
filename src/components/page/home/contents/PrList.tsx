import { diffDays } from "@/utils/date";

interface Props {
  nickname: string | undefined;
  prs: Array<{ movement: string; record: number; date: string }> | undefined;
}
const PRList = ({ nickname, prs }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2>
        <span className="text-[--orange]">
          {nickname ? nickname + "님 " : ""}
        </span>
        PR List
      </h2>
      <div className="p-6 rounded-xl bg-[--componentBgColor] w-full max-w-[464px] h-full max-h-[336px] text-sm !leading-loose xs:text-2xl">
        {!nickname ? (
          <p>로그인 후 기록을 등록해 보세요</p>
        ) : prs === undefined ? (
          <p>PR 기록을 등록해 보세요</p>
        ) : (
          prs.map((pr) => (
            <p key={pr.movement}>
              {pr.movement} - {pr.record}LB
              <span className="text-sm text-[--orange]">
                {" " + diffDays(pr.date) + "일 전"}
              </span>
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default PRList;
