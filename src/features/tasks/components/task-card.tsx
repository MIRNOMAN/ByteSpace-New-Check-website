"use client";

import React, { useState } from "react";
import { Task, TaskStatus } from "../types/task";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge, PriorityBadge } from "@/components/common/status-badge";
import { ConfirmModal } from "@/components/common/confirm-modal";
import { Calendar, Trash2, Tag } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { deleteTask, updateTaskStatus } from "@/store/slices/task-slice";
import { toast } from "sonner";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const dispatch = useAppDispatch();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleStatusChange = (newStatus: TaskStatus) => {
    dispatch(updateTaskStatus({ id: task.id, status: newStatus }));
    toast.info("Status Updated", {
      description: `Task "${task.title}" marked as ${newStatus}.`,
    });
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    toast.success("Task Deleted", {
      description: `Task "${task.title}" was removed.`,
    });
  };

  return (
    <>
      <Card className="hover:shadow-md transition-all duration-200 border-border/80 group">
        <CardContent className="p-5 space-y-3.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                {task.id}
              </span>
              <PriorityBadge priority={task.priority} />
              <StatusBadge status={task.status} />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground opacity-60 group-hover:opacity-100 hover:text-destructive hover:bg-destructive/10 transition-colors"
              onClick={() => setIsConfirmOpen(true)}
              title="Delete task"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold text-base tracking-tight text-foreground line-clamp-1">
              {task.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {task.description}
            </p>
          </div>

          <div className="pt-2 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <Tag className="w-3 h-3 text-muted-foreground/70" />
                {task.category}
              </span>
              {task.dueDate && (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-muted-foreground/70" />
                  {task.dueDate}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(e.target.value as TaskStatus)}
                className="h-7 text-[11px] rounded border border-input bg-background/80 px-2 shadow-2xs font-medium cursor-pointer"
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="review">Review</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Task"
        description={`Are you sure you want to delete "${task.title}"? This will update the Redux state.`}
        confirmLabel="Delete Task"
        variant="destructive"
      />
    </>
  );
}
