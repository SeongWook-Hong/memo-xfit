import Header from "@/components/page/home/header/Header";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";

const Wod = () => {
  const { nickName } = useAuthStore();

  useEffect(() => {}, []);
  return (
    <>
      <Header nickname={nickName}></Header>
      {}
    </>
  );
};
export default Wod;
