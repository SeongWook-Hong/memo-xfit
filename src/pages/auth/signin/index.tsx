import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRef } from "react";
import SignForm from "@/components/page/auth/SignForm";
import { usePostSignin } from "@/hooks/useAuth";
import { authRedirect } from "@/lib/authRedirect";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await authRedirect(context);
};

const Signin = () => {
  const formRef = useRef({ email: "", nickname: "", password: "" });
  const { mutate: signin } = usePostSignin();

  const handleSubmit = () => {
    signin({ ...formRef.current });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col w-[520px] p-3 gap-3">
        <Link href="/" className="mx-auto text-6xl pb-7">
          MEMO-XFIT
        </Link>
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
