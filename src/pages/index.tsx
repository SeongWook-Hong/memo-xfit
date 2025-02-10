import Header from "@/components/common/header/Header";
import { checkSignin } from "@/utils/checkSignin";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await checkSignin(context);
};
interface Props {
  nickname: string | undefined;
}
export default function Home({ nickname }: Props) {
  return (
    <div className="text-2xl">
      <Header nickname={nickname} />
    </div>
  );
}
