import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiNotification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  title?: string;
  timestamp: number;
}

interface UiState {
  sidebarOpen: boolean;
  activeModal: string | null;
  notifications: UiNotification[];
  themeMode: "light" | "dark" | "system";
}

const initialState: UiState = {
  sidebarOpen: true,
  activeModal: null,
  notifications: [
    {
      id: "notif_1",
      type: "info",
      title: "Architecture Ready",
      message: "Redux Toolkit & Shadcn UI initialized successfully.",
      timestamp: Date.now(),
    },
  ],
  themeMode: "system",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
    addNotification: (
      state,
      action: PayloadAction<Omit<UiNotification, "id" | "timestamp">>
    ) => {
      state.notifications.unshift({
        ...action.payload,
        id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        timestamp: Date.now(),
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload);
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
    setThemeMode: (state, action: PayloadAction<"light" | "dark" | "system">) => {
      state.themeMode = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
  clearAllNotifications,
  setThemeMode,
} = uiSlice.actions;

export default uiSlice.reducer;
