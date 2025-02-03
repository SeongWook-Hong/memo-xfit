import baseAxios from "@/lib/axios";

const postNewUser = async (formData: object) => {
  const { data, status } = await baseAxios.post("/user/signup", formData);
  return { data, status };
};
export default postNewUser;
