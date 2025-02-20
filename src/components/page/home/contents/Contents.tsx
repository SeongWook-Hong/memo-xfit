import { TWod } from "@/types";
import WodList from "./WodList";
interface Props {
  wods: TWod[];
}
const Contents = ({ wods }: Props) => {
  return (
    <div className="pt-10">
      <WodList wods={wods} />
    </div>
  );
};
export default Contents;
