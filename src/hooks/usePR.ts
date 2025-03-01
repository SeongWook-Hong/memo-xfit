import baseAxios from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetPR = () => {
  return useQuery({
    queryKey: ["pr"],
    queryFn: async () => {
      const { data } = await baseAxios.get("/record/pr");
      return data;
    },
    retry: false,
  });
};

export const usePostPR = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: object) => {
      const { data } = await baseAxios.post("/record/pr", formData);
      return data;
    },
    onSuccess: () => {
      alert("새로운 PR기록이 추가 되었습니다!");
      queryClient.invalidateQueries({ queryKey: ["pr"] });
    },
    onError: (error: any) => {
      if (error.status === 400)
        alert("이미 PR기록을 생성하였습니다. 삭제 후 다시 진행해주세요.");
      else alert("서버와 연결이 끊겼습니다. 잠시 후, 다시 시도해 주세요.");
    },
  });
};
