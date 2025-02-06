import Image from "next/image";
import Link from "next/link";
import profilePic from "@/assets/images/basic-profile.png";
import ProfileToggle from "@/components/common/header/ProfileToggle";

interface Props {
  nickname: string | undefined;
}
const Header = ({ nickname }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between h-16 bg-[--componentBgColor] px-4">
        <div>menu</div>
        <Link href="/">MEMO-XFIT</Link>
        <div>
          {nickname ? (
            <div className="relative flex items-center">
              <Image
                src={profilePic}
                alt="Default Profile"
                width={32}
                height={32}
              />
              <span className="text-base ml-3">{nickname}</span>
              <ProfileToggle />
            </div>
          ) : (
            <span className="flex text-sm gap-3">
              <Link href="/auth/signup">회원가입</Link>
              <Link href="/auth/signin">로그인</Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
