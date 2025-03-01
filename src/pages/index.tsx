import Contents from "@/components/page/home/contents/Contents";
import Header from "@/components/page/home/header/Header";
import { useGetWods } from "@/hooks/useWod";
import { useGetPR } from "@/hooks/usePR";
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
  const { data } = useGetPR();

  return (
    <div className="text-2xl">
      <Header nickname={nickname} />
      <div className="max-w-7xl px-5 mx-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Contents wods={wods} nickname={nickname} prs={data?.records} />
        )}
      </div>
    </div>
  );
}
