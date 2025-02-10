import baseAxios from "@/lib/axios";

const isUsedEmail = async (email: string) => {
  const { data } = await baseAxios.get(`/auth/signup/?email=${email}`);
  return data;
};
export default isUsedEmail;
