import Header from "@/components/page/home/header/Header";
import { checkSignin } from "@/lib/checkSignin";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await checkSignin(context);
};
interface Props {
  nickname: string | undefined;
}
const Wod = ({ nickname }: Props) => {
  return (
    <>
      <Header nickname={nickname}></Header>
      {}
    </>
  );
};
export default Wod;
