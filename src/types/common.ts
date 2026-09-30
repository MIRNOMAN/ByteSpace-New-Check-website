export type StatusType = "idle" | "loading" | "succeeded" | "failed";

export type SeverityType = "default" | "success" | "warning" | "error" | "info";

export type PriorityType = "low" | "medium" | "high" | "urgent";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: "admin" | "developer" | "viewer";
  avatar?: string;
}
