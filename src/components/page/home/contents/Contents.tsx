import { TWod } from "@/types";
import WodList from "./WodList";
import PrList from "./PrList";
import { TUserInfo } from "@/types/userInfo";
interface Props {
  wods: TWod[];
  userInfo: TUserInfo | undefined;
}
const Contents = ({ wods, userInfo }: Props) => {
  return (
    <div className="pt-10">
      <WodList wods={wods} />
      <PrList userInfo={userInfo} />
    </div>
  );
};
export default Contents;
