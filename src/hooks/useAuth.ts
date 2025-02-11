import baseAxios from "@/lib/axios";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

// 회원가입 - 이미 사용중인 email인지 확인
export const useGetUsedEmail = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const { data } = await baseAxios.get(`/auth/signup/?email=${email}`);
      return data;
    },
    onError: () => {
      alert("이미 사용중인 이메일입니다. 다른 이메일을 사용해 주세요.");
    },
  });
};

// 회원가입 - 새로운 유저 정보 추가
export const usePostSignup = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (formData: object) => {
      const { data } = await baseAxios.post("/auth/signup", formData);
      return data;
    },
    onSuccess: (nickname) => {
      console.log(nickname);
      alert(nickname + "님 환영합니다! 로그인을 진행해 주세요.");
      router.push("/auth/signin");
      return;
    },
    onError: () => {
      alert("서버와 연결이 끊겼습니다. 잠시 후, 다시 시도해 주세요.");
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
