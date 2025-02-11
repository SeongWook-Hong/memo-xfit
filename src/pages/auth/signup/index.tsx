import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRef } from "react";
import SignForm from "@/components/page/auth/SignForm";
import { authRedirect } from "@/lib/authRedirect";
import { useGetUsedEmail, usePostSignup } from "@/hooks/useAuth";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await authRedirect(context);
};

const Signup = () => {
  const { mutate: usedEmail } = useGetUsedEmail();
  const { mutate: signup } = usePostSignup();

  const formRef = useRef({ email: "", nickname: "", password: "" });

  const handleSubmit = () => {
    usedEmail(formRef.current.email, {
      onSuccess: () => {
        signup({ ...formRef.current });
      },
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col w-[520px] p-3 gap-3">
        <Link href="/" className="mx-auto text-6xl pb-7">
          MEMO-XFIT
        </Link>
        <SignForm sign="up" formRef={formRef} onSubmit={handleSubmit} />
        <span className="text-center">
          이미 회원이신가요?{" "}
          <Link href="/auth/signin" className="text-orange underline">
            로그인 하기
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
