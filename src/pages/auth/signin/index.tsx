import Link from "next/link";
import SignForm from "@/components/page/auth/SignForm";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col w-[520px] p-3 gap-3">
        <SignForm sign="in" />
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
