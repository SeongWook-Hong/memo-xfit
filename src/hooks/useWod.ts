import baseAxios from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetWods = () => {
  return useQuery({
    queryKey: ["wods"],
    queryFn: async () => {
      const { data } = await baseAxios.get("/wod");
      return data;
    },
  });
};
// 새로운 WOD 추가
export const usePostWod = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: object) => {
      const { data } = await baseAxios.post("/wod", formData);
      return data;
    },
    onSuccess: () => {
      alert("새로운 WOD가 추가 되었습니다!");
      queryClient.invalidateQueries({ queryKey: ["wods"] });
    },
    onError: (error: any) => {
      if (error.status === 400)
        alert("해당 날짜 WOD는 이미 존재합니다. 삭제 후 다시 진행해주세요.");
      else alert("서버와 연결이 끊겼습니다. 잠시 후, 다시 시도해 주세요.");
    },
  });
};
