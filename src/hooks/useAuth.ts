import baseAxios from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// 회원가입 - 이미 사용중인 email인지 확인
export const useGetUsedEmail = (email: string) => {
  return useQuery({
    queryKey: ["usedEmail", email],
    queryFn: async () => {
      const { data } = await baseAxios.get(`/auth/signup/?email=${email}`);
      return data;
    },
  });
};

// 회원가입 - 새로운 유저 정보 추가
export const usePostSignup = () => {
  return useMutation({
    mutationFn: async (formData: object) => {
      const { data, status } = await baseAxios.post("/auth/signup", formData);
      return { data, status };
    },
  });
};

// 로그인 - 유저 정보 불러오기
export const usePostSignin = () => {
  return useMutation({
    mutationFn: async (formData: object) => {
      const { data } = await baseAxios.post("/auth/signin", formData);
      return data;
    },
  });
};

// 로그인 - 페이지 새로고침 발생 시, Token 유무 확인
export const useGetNickname = () => {
  return useQuery({
    queryKey: ["nickname"],
    queryFn: async () => {
      const { data } = await baseAxios.get("/auth");
      return data;
    },
  });
};
