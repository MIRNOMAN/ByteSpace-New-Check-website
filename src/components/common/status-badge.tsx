import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, PlayCircle, AlertCircle, ArrowUp, ArrowRight, ArrowDown, Flame } from "lucide-react";
import { TaskPriority, TaskStatus } from "@/features/tasks/types/task";

interface StatusBadgeProps {
  status: TaskStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  switch (status) {
    case "completed":
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 font-medium gap-1",
            className
          )}
        >
          <CheckCircle2 className="w-3 h-3" />
          Completed
        </Badge>
      );
    case "in-progress":
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20 font-medium gap-1",
            className
          )}
        >
          <PlayCircle className="w-3 h-3" />
          In Progress
        </Badge>
      );
    case "review":
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 font-medium gap-1",
            className
          )}
        >
          <Clock className="w-3 h-3" />
          In Review
        </Badge>
      );
    case "todo":
    default:
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20 font-medium gap-1",
            className
          )}
        >
          <AlertCircle className="w-3 h-3" />
          To Do
        </Badge>
      );
  }
}

interface PriorityBadgeProps {
  priority: TaskPriority;
  className?: string;
}

export function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  switch (priority) {
    case "urgent":
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30 font-semibold gap-1",
            className
          )}
        >
          <Flame className="w-3 h-3 text-red-500" />
          Urgent
        </Badge>
      );
    case "high":
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30 font-medium gap-1",
            className
          )}
        >
          <ArrowUp className="w-3 h-3 text-orange-500" />
          High
        </Badge>
      );
    case "medium":
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-sky-500/15 text-sky-700 dark:text-sky-400 border-sky-500/30 font-medium gap-1",
            className
          )}
        >
          <ArrowRight className="w-3 h-3 text-sky-500" />
          Medium
        </Badge>
      );
    case "low":
    default:
      return (
        <Badge
          variant="outline"
          className={cn(
            "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20 font-normal gap-1",
            className
          )}
        >
          <ArrowDown className="w-3 h-3 text-slate-400" />
          Low
        </Badge>
      );
  }
}
