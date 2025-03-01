export const diffDays = (inputDate: string): number => {
  const today = new Date();
  const todayFormatted = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const [year, month, day] = inputDate.split("-").map(Number);
  const parsedYear = 2000 + year;
  const parsedDate = new Date(parsedYear, month - 1, day);

  const diffTime = todayFormatted.getTime() - parsedDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
