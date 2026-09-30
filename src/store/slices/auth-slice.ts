import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSession } from "@/types/common";

interface AuthState {
  user: UserSession | null;
  isAuthenticated: boolean;
  token: string | null;
  status: "idle" | "loading" | "authenticated" | "unauthenticated";
}

const initialState: AuthState = {
  user: {
    id: "usr_01",
    name: "Alex Vance",
    email: "alex.vance@bytespace.dev",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  isAuthenticated: true,
  token: "jwt_mock_token_sample",
  status: "authenticated",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: UserSession; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.status = "authenticated";
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = "unauthenticated";
    },
    updateUserProfile: (state, action: PayloadAction<Partial<UserSession>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { setCredentials, logout, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
