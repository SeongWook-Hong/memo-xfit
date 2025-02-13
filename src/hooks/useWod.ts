import baseAxios from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

// 새로운 WOD 추가
export const usePostWod = () => {
  return useMutation({
    mutationFn: async (formData: object) => {
      const { data } = await baseAxios.post("/wod", formData);
      return data;
    },
    onSuccess: () => {
      return;
    },
    onError: (error: any) => {
      if (error.status === 400)
        alert("해당 날짜 WOD는 이미 존재합니다. 삭제 후 다시 진행해주세요.");
      else alert("서버와 연결이 끊겼습니다. 잠시 후, 다시 시도해 주세요.");
    },
  });
};
