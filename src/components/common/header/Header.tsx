import Image from "next/image";
import Link from "next/link";
import profilePic from "@/assets/images/basic-profile.png";
import ProfileToggle from "@/components/common/header/ProfileToggle";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

interface Props {
  nickname: string | undefined;
}
const Header = ({ nickname }: Props) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickProfile = () => {
    setProfileMenu(!profileMenu);
  };

  useClickOutside(profileMenuRef, () => setProfileMenu(false));
  return (
    <>
      <div className="relative flex items-center justify-between h-16 bg-[--componentBgColor] px-4">
        <div>menu</div>
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          MEMO-XFIT
        </Link>
        <div>
          {nickname ? (
            <div
              ref={profileMenuRef}
              className="relative flex items-center"
              onClick={handleClickProfile}
            >
              <Image
                src={profilePic}
                alt="Default Profile"
                width={32}
                height={32}
              />
              <span className="text-base ml-3">{nickname}</span>
              <ProfileToggle isOpen={profileMenu} />
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
