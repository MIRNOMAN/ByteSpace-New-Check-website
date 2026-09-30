import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/errors/api-response";
import { ValidationError, InternalServerError } from "@/lib/errors/app-error";
import { Task } from "@/features/tasks/types/task";

// In-memory mock storage for API demo
const tasksData: Task[] = [
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
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const simulateError = searchParams.get("simulateError");
    const simulateStatus = searchParams.get("simulateStatus");

    // Simulated error testing hooks
    if (simulateError === "true" || simulateStatus === "500") {
      throw new InternalServerError("Simulated server database connection failure for testing error handling!");
    }

    if (simulateStatus === "400") {
      throw new ValidationError("Simulated validation error: Missing required query filter parameters.");
    }

    return successResponse(tasksData, "Tasks fetched successfully");
  } catch (error) {
    return errorResponse(error, "Failed to fetch tasks", "/api/tasks");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || typeof body.title !== "string" || body.title.trim().length === 0) {
      throw new ValidationError("Task title is required and cannot be empty", {
        field: "title",
        received: body.title,
      });
    }

    if (!body.priority) {
      throw new ValidationError("Task priority is required", { field: "priority" });
    }

    const newTask: Task = {
      id: `tsk-${Date.now().toString().slice(-4)}`,
      title: body.title.trim(),
      description: body.description || "",
      status: body.status || "todo",
      priority: body.priority,
      category: body.category || "General",
      assignee: { name: "Alex Vance" },
      dueDate: body.dueDate || new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasksData.unshift(newTask);

    return successResponse(newTask, "Task created successfully", 201);
  } catch (error) {
    return errorResponse(error, "Failed to create task", "/api/tasks");
  }
}
