import Contents from "@/components/page/home/contents/Contents";
import Header from "@/components/page/home/header/Header";
import { useGetWods } from "@/hooks/useWod";
import { checkSignin } from "@/lib/checkSignin";
import { TUserInfo } from "@/types/userInfo";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await checkSignin(context);
};

interface Props {
  userInfo: TUserInfo | undefined;
}
export default function Home({ userInfo }: Props) {
  const { data: wods, isLoading } = useGetWods();

  return (
    <div className="text-2xl">
      <Header nickname={userInfo?.nickname} />
      <div className="max-w-7xl px-5 mx-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Contents wods={wods} userInfo={userInfo} />
        )}
      </div>
    </div>
  );
}
