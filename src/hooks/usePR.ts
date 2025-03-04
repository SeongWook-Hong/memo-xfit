import baseAxios from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

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

export const usePutPR = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: object) => {
      const data = await baseAxios.put("/record/pr", formData);
      return data.status;
    },
    onSuccess: (res) => {
      if (res === 201) alert("새로운 PR기록이 추가 되었습니다!");
      else alert("PR기록이 수정되었습니다!");

      queryClient.invalidateQueries({ queryKey: ["pr"] });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 409) alert("이전과 동일한 PR기록입니다.");
      else alert("서버와 연결이 끊겼습니다. 잠시 후, 다시 시도해 주세요.");
    },
  });
};
