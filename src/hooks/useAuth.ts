import baseAxios from "@/lib/axios";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { setSignin } = useAuthStore();
  return useMutation({
    mutationFn: async (formData: object) => {
      const { data } = await baseAxios.post("/auth/signin", formData);
      return data;
    },
    onSuccess: (nickname) => {
      setSignin(nickname);
      router.replace("/");
      return;
    },
    onError: (error) => {
      console.error("로그인 실패:", error);
      alert(
        "아이디 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 확인해 주세요."
      );
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
