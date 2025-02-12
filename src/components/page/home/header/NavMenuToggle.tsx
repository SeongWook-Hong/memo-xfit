interface Props {
  isOpen: boolean;
}
const NavMenuToggle = ({ isOpen }: Props) => {
  return (
    <div>
      {isOpen && (
        <div className="absolute top-16 left-0 rounded-md shadow-md flex flex-col items-start text-base bg-[--componentBgColor]">
          <button className="p-2 hover:text-[--orange]" onClick={() => {}}>
            - 내 기록 관리
          </button>
          <button className="p-2 hover:text-[--orange]" onClick={() => {}}>
            - WOD 확인
          </button>
        </div>
      )}
    </div>
  );
};

export default NavMenuToggle;
