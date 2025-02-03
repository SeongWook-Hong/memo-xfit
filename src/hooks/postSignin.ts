import baseAxios from "@/lib/axios";

const getSignin = async (formData: object) => {
  const { data } = await baseAxios.post("/user/signin", formData);
  return data;
};
export default getSignin;
