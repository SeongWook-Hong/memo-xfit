import Link from "next/link";
import SignForm from "@/components/page/auth/SignForm";
import { useRef } from "react";
import getSignin from "@/hooks/postSignin";

const Signin = () => {
  const formRef = useRef({ email: "", nickname: "", password: "" });

  const handleSubmit = async () => {
    const { data, isSuccess, message } = await getSignin({
      ...formRef.current,
    });
    if (isSuccess === false) {
      alert(message); // 로그인 실패
    } else {
      console.log(data); // temp
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col w-[520px] p-3 gap-3">
        <SignForm sign="in" formRef={formRef} onSubmit={handleSubmit} />
        <span className="text-center">
          회원이 아니신가요?{" "}
          <Link href="/auth/signup" className="text-orange underline">
            회원가입 하기
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
