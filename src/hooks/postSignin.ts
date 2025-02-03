import baseAxios from "@/lib/axios";

const postSignin = async (formData: object) => {
  const { data } = await baseAxios.post("/user/signin", formData);
  return data;
};
export default postSignin;
