import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { Task, CreateTaskInput, UpdateTaskInput } from "@/features/tasks/types/task";
import { ApiResponse } from "@/types/api";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<ApiResponse<Task[]>, { simulateError?: boolean } | void>({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params?.simulateError) {
          queryParams.append("simulateError", "true");
        }
        const qs = queryParams.toString();
        return `/tasks${qs ? `?${qs}` : ""}`;
      },
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: "Task" as const, id })),
              { type: "Task", id: "LIST" },
            ]
          : [{ type: "Task", id: "LIST" }],
    }),

    getTaskById: builder.query<ApiResponse<Task>, string>({
      query: (id) => `/tasks/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Task", id }],
    }),

    createTask: builder.mutation<ApiResponse<Task>, CreateTaskInput>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),

    updateTask: builder.mutation<ApiResponse<Task>, UpdateTaskInput>({
      query: ({ id, ...body }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Task", id },
        { type: "Task", id: "LIST" },
      ],
    }),

    deleteTask: builder.mutation<ApiResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Task", id },
        { type: "Task", id: "LIST" },
      ],
    }),

    triggerSimulatedError: builder.query<ApiResponse<null>, { code?: number }>({
      query: (params) => `/tasks?simulateStatus=${params?.code || 500}`,
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useLazyTriggerSimulatedErrorQuery,
} = taskApi;
