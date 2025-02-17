import Contents from "@/components/page/home/contents/Contents";
import Header from "@/components/page/home/header/Header";
import { useGetWods } from "@/hooks/useWod";
import { checkSignin } from "@/lib/checkSignin";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await checkSignin(context);
};
interface Props {
  nickname: string | undefined;
}
export default function Home({ nickname }: Props) {
  const { data: wods, isLoading } = useGetWods();

  return (
    <div className="text-2xl">
      <Header nickname={nickname} />
      {isLoading ? <p>Loading...</p> : <Contents wods={wods} />}
    </div>
  );
}
