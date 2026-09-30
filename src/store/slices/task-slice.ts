import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskFilterOptions, CreateTaskInput, UpdateTaskInput } from "@/features/tasks/types/task";

interface TaskState {
  tasks: Task[];
  filters: TaskFilterOptions;
  selectedTaskId: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialTasks: Task[] = [
  {
    id: "tsk-101",
    title: "Implement Redux Toolkit Store & Providers",
    description: "Configured typed hooks, root reducer, and SSR-safe StoreProvider for Next.js App Router.",
    status: "completed",
    priority: "high",
    category: "Architecture",
    assignee: { name: "Alex Vance" },
    dueDate: "2026-10-05",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tsk-102",
    title: "Set Up shadcn/ui Component Foundation",
    description: "Install base components, theme variables, dialogs, badges, cards, and custom variants.",
    status: "completed",
    priority: "urgent",
    category: "Design System",
    assignee: { name: "Sarah Connor" },
    dueDate: "2026-10-06",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tsk-103",
    title: "Design Enterprise Error Boundaries & API Handlers",
    description: "Add route error.tsx, global-error.tsx, reusable ErrorBoundary, and standardized API error parser.",
    status: "in-progress",
    priority: "urgent",
    category: "Reliability",
    assignee: { name: "David Miller" },
    dueDate: "2026-10-08",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tsk-104",
    title: "Build Feature-Driven Modular Architecture",
    description: "Decouple domain features, reusable shared components, API contracts, and custom hooks.",
    status: "in-progress",
    priority: "high",
    category: "Clean Code",
    assignee: { name: "Elena Rostova" },
    dueDate: "2026-10-10",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tsk-105",
    title: "Implement Performance Profiling & Caching Strategy",
    description: "Audit client bundle size, configure Next.js Turbopack optimization, and setup RTK Query tags.",
    status: "todo",
    priority: "medium",
    category: "Optimization",
    assignee: { name: "Alex Vance" },
    dueDate: "2026-10-14",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const initialState: TaskState = {
  tasks: initialTasks,
  filters: {
    status: "all",
    priority: "all",
    search: "",
  },
  selectedTaskId: null,
  status: "idle",
  error: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<CreateTaskInput>) => {
      const newTask: Task = {
        id: `tsk-${Date.now().toString().slice(-4)}`,
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status || "todo",
        priority: action.payload.priority,
        category: action.payload.category || "General",
        assignee: { name: "Alex Vance" },
        dueDate: action.payload.dueDate || new Date().toISOString().split("T")[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.tasks.unshift(newTask);
    },
    updateTask: (state, action: PayloadAction<UpdateTaskInput>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = {
          ...state.tasks[index],
          ...action.payload,
          updatedAt: new Date().toISOString(),
        };
      }
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
        task.updatedAt = new Date().toISOString();
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      if (state.selectedTaskId === action.payload) {
        state.selectedTaskId = null;
      }
    },
    selectTask: (state, action: PayloadAction<string | null>) => {
      state.selectedTaskId = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<TaskFilterOptions>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = { status: "all", priority: "all", search: "" };
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
  selectTask,
  setFilters,
  resetFilters,
  setError,
} = taskSlice.actions;

export default taskSlice.reducer;
