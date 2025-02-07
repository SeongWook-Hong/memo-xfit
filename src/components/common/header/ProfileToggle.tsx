interface Props {
  isOpen: boolean;
}
const ProfileToggle = ({ isOpen }: Props) => {
  return (
    <div>
      {isOpen && (
        <div className="absolute top-8 right-0 rounded-md shadow-md flex flex-col text-base bg-[--componentBgColor]">
          <button
            className="p-2 hover:bg-[--orange]"
            onClick={() => {
              /* 마이페이지로 이동 */
            }}
          >
            My Page
          </button>
          <button
            className="p-2 hover:bg-[--orange]"
            onClick={() => {
              /* 로그아웃 처리 */
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileToggle;
