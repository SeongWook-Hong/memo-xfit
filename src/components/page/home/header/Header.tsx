import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import MenuToggle from "@/assets/icons/menu.svg";
import logoPic from "@/assets/images/logo.png";
import profilePic from "@/assets/images/basic-profile.png";
import ProfileToggle from "@/components/page/home/header/ProfileToggle";
import NavMenuToggle from "@/components/page/home/header/NavMenuToggle";
import useClickOutside from "@/hooks/useClickOutside";

interface Props {
  nickname: string | undefined;
}
const Header = ({ nickname }: Props) => {
  const [navMenu, setNavMenu] = useState(false);
  const navMenuRef = useRef<SVGElement>(null);

  const [profileMenu, setProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickMenu = () => {
    setNavMenu(!navMenu);
  };
  const handleClickProfile = () => {
    setProfileMenu(!profileMenu);
  };

  useClickOutside(navMenuRef, () => setNavMenu(false));
  useClickOutside(profileMenuRef, () => setProfileMenu(false));
  return (
    <>
      <div className="relative flex items-center justify-between h-16 bg-[--componentBgColor] px-4">
        <MenuToggle
          ref={navMenuRef}
          className="w-8 h-8"
          onClick={handleClickMenu}
        />
        <NavMenuToggle isOpen={navMenu} />
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image src={logoPic} width={250} alt="logo Image" />
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
                className="hidden sm:block"
              />
              <span className="text-base ml-3">{nickname}</span>
              <ProfileToggle isOpen={profileMenu} />
            </div>
          ) : (
            <span className="flex text-sm gap-3">
              <Link href="/auth/signup" className="hidden sm:block">
                회원가입
              </Link>
              <Link href="/auth/signin">로그인</Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
