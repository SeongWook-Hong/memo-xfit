import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import SignForm from "@/components/page/auth/SignForm";
import isUsedEmail from "@/hooks/isUsedEmail";
import postNewUser from "@/hooks/postNewUser";
import { authRedirect } from "@/utils/authRedirect";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await authRedirect(context);
};

const Signup = () => {
  const router = useRouter();

  const formRef = useRef({ email: "", nickname: "", password: "" });

  const handleSubmit = async () => {
    const { isUsed, message } = await isUsedEmail(formRef.current.email);
    if (!isUsed) {
      const { data, status } = await postNewUser({ ...formRef.current });

      if (status === 201) {
        alert(data + "님 환영합니다! 로그인을 진행해주세요.");
        router.replace("/auth/signin");
        return;
      }
      alert(data.message); // server Error
    } else {
      alert(message); // 이미 사용중인 email
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col w-[520px] p-3 gap-3">
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
