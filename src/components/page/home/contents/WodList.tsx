import { TWod } from "@/types";

interface Props {
  wods: TWod[];
}
const WodList = ({ wods }: Props) => {
  return (
    <ul className="flex gap-5 p-4 overflow-y-auto">
      {wods.map((wod: TWod) => (
        <li
          key={wod._id}
          className="flex flex-col gap-3 p-6 rounded-xl bg-[--componentBgColor] w-56 h-56 flex-shrink-0"
        >
          <span className="text-[--orange] font-bold">{wod.date}</span>
          <pre className="flex flex-col gap-1 text-base">
            <span className="font-bold">{wod.wodType + ":\n"}</span>
            <span className="overflow-x-hidden text-ellipsis overflow-y-scroll">
              {wod.workout}
            </span>
          </pre>
        </li>
      ))}
    </ul>
  );
};
export default WodList;
