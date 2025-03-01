import { TWod } from "@/types";
import { useRouter } from "next/router";

interface Props {
  wods: TWod[];
}
const WodList = ({ wods }: Props) => {
  const router = useRouter();
  const handleClickWod = (id: string) => {
    router.push(`/wod/${id}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <span>Recent WODs</span>
      <ul className="flex gap-4 overflow-y-auto custom-scrollbar pb-2">
        {wods.map((wod: TWod) => (
          <li
            key={wod._id}
            onClick={() => handleClickWod(wod._id)}
            className="flex flex-col gap-4 p-6 rounded-xl bg-[--componentBgColor] w-56 h-56 flex-shrink-0"
          >
            <span className="text-[--orange] font-bold">{wod.date}</span>
            <pre className="flex flex-col gap-1 text-base h-32">
              <span className="font-bold">{wod.wodType + ":\n"}</span>
              <span className="overflow-x-hidden text-ellipsis overflow-y-scroll h-full overflow-hidden-scrollbar">
                {wod.workout}
              </span>
            </pre>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WodList;
