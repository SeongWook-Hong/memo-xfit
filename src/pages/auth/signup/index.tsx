import Link from "next/link";
import SignForm from "@/components/page/auth/SignForm";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col w-[520px] p-3 gap-3">
        <SignForm sign="up" />
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
