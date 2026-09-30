import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/errors/api-response";
import { NotFoundError, ValidationError } from "@/lib/errors/app-error";

export async function PATCH(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params;
    const { id } = params;

    if (!id) {
      throw new ValidationError("Task ID parameter is missing");
    }

    if (id === "not-found") {
      throw new NotFoundError(`Task with id '${id}' was not found in the database.`);
    }

    const body = await request.json();

    return successResponse(
      {
        id,
        ...body,
        updatedAt: new Date().toISOString(),
      },
      "Task updated successfully"
    );
  } catch (error) {
    return errorResponse(error, "Failed to update task", `/api/tasks`);
  }
}

export async function DELETE(
  _request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params;
    const { id } = params;

    if (!id) {
      throw new ValidationError("Task ID parameter is missing");
    }

    if (id === "error-trigger") {
      throw new NotFoundError(`Task with id '${id}' does not exist.`);
    }

    return successResponse({ id }, `Task ${id} deleted successfully`);
  } catch (error) {
    return errorResponse(error, "Failed to delete task", `/api/tasks`);
  }
}
