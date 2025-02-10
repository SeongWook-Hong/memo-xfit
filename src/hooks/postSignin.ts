import baseAxios from "@/lib/axios";

const postSignin = async (formData: object) => {
  const { data } = await baseAxios.post("/auth/signin", formData);
  return data;
};
export default postSignin;
