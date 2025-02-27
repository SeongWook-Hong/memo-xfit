import { TWod } from "@/types";
import WodList from "./WodList";
import PrList from "./PrList";
interface Props {
  wods: TWod[];
}
const Contents = ({ wods }: Props) => {
  return (
    <div className="pt-10">
      <WodList wods={wods} />
      <PrList />
    </div>
  );
};
export default Contents;
