"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Filter } from "lucide-react";
import { TaskPriority, TaskStatus } from "../types/task";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters, resetFilters } from "@/store/slices/task-slice";

export function TaskFilters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.tasks.filters);

  const hasActiveFilters =
    filters.search || filters.status !== "all" || filters.priority !== "all";

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-muted/30 p-3 rounded-xl border border-border/60">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search tasks..."
          value={filters.search || ""}
          onChange={(e) => dispatch(setFilters({ search: e.target.value }))}
          className="pl-9 h-9 text-xs bg-background"
        />
        {filters.search && (
          <button
            onClick={() => dispatch(setFilters({ search: "" }))}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Filter className="w-3.5 h-3.5" />
          <span>Status:</span>
        </div>
        <select
          value={filters.status || "all"}
          onChange={(e) =>
            dispatch(setFilters({ status: e.target.value as TaskStatus | "all" }))
          }
          className="h-8 rounded-md border border-input bg-background px-2.5 text-xs font-medium shadow-2xs"
        >
          <option value="all">All Statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="review">In Review</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={filters.priority || "all"}
          onChange={(e) =>
            dispatch(setFilters({ priority: e.target.value as TaskPriority | "all" }))
          }
          className="h-8 rounded-md border border-input bg-background px-2.5 text-xs font-medium shadow-2xs"
        >
          <option value="all">All Priorities</option>
          <option value="urgent">Urgent</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(resetFilters())}
            className="h-8 text-xs text-muted-foreground hover:text-foreground px-2"
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
