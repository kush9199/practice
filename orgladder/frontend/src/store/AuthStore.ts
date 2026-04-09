import { create } from "zustand";

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
  initAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({token: null, isAuthenticated: false})
  },
  initAuth: () => {
    const token = localStorage.getItem("token");
    if(token){
        set({token, isAuthenticated: true})
    }
  }
}));
