export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "todo" | "in-progress" | "review" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: string;
  assignee?: {
    name: string;
    avatar?: string;
  };
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description: string;
  priority: TaskPriority;
  category: string;
  status?: TaskStatus;
  dueDate?: string;
}

export interface UpdateTaskInput extends Partial<CreateTaskInput> {
  id: string;
}

export interface TaskFilterOptions {
  status?: TaskStatus | "all";
  priority?: TaskPriority | "all";
  search?: string;
  category?: string;
}
