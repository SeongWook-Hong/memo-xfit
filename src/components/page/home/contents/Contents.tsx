import { TWod } from "@/types";
import WodList from "./WodList";
interface Props {
  wods: TWod[];
}
const Contents = ({ wods }: Props) => {
  return (
    <>
      <WodList wods={wods} />
    </>
  );
};
export default Contents;
