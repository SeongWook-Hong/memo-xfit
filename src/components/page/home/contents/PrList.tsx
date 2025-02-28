const PrList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>PR List</h2>
      <div className="p-6 rounded-xl bg-[--componentBgColor] w-full max-w-[464px] h-[336px] leading-loose">
        <p className="">
          Clean - 225LB <span className="text-sm text-[--orange]">1일 전</span>
        </p>
        <p className="">
          Clean & Jerk - 225LB{" "}
          <span className="text-sm text-[--orange]">1일 전</span>
        </p>
        <p className="">
          Snatch - 185LB <span className="text-sm text-[--orange]">1일 전</span>
        </p>
        <p className="">
          Deadlift - 405LB{" "}
          <span className="text-sm text-[--orange]">1일 전</span>
        </p>
        <p className="">
          Squat - 315LB <span className="text-sm text-[--orange]">1일 전</span>
        </p>
        <p className="">
          Shoulder Press - 225LB{" "}
          <span className="text-sm text-[--orange]">1일 전</span>
        </p>
      </div>
    </div>
  );
};

export default PrList;
