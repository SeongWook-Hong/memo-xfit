import { create } from "zustand";
import { deleteCookie } from "cookies-next";
interface AuthState {
  isSignin: boolean;
  nickName: string | undefined;
  setSignin: (nickname?: string) => void;
}
export const useAuthStore = create<AuthState>((set) => ({
  isSignin: false,
  nickName: undefined,
  setSignin: (nickname?: string) => {
    if (nickname) {
      set({ isSignin: true, nickName: nickname });
    } else {
      set({ isSignin: false, nickName: undefined });
      deleteCookie("loginToken");
    }
  },
}));
