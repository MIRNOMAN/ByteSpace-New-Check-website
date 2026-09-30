"use client";

import React, { useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addTask } from "@/store/slices/task-slice";
import { CreateTaskInput } from "../types/task";
import { PageHeader } from "@/components/common/page-header";
import { StatCard } from "@/components/common/stat-card";
import { EmptyState } from "@/components/common/empty-state";
import { TaskFilters } from "./task-filters";
import { TaskCard } from "./task-card";
import { TaskDialog } from "./task-dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorSandbox } from "@/features/error-demo/components/error-sandbox";
import {
  Plus,
  CheckCircle2,
  Clock,
  Flame,
  LayoutGrid,
  ShieldAlert,
  Code2,
  Boxes,
} from "lucide-react";

export function TaskDashboard() {
  const dispatch = useAppDispatch();
  const { tasks, filters } = useAppSelector((state) => state.tasks);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Filter tasks based on Redux filter state
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Status filter
      if (filters.status && filters.status !== "all" && task.status !== filters.status) {
        return false;
      }
      // Priority filter
      if (filters.priority && filters.priority !== "all" && task.priority !== filters.priority) {
        return false;
      }
      // Search filter
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesTitle = task.title.toLowerCase().includes(query);
        const matchesDesc = task.description.toLowerCase().includes(query);
        const matchesCat = task.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [tasks, filters]);

  // Metric computations
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === "completed").length;
    const inProgress = tasks.filter((t) => t.status === "in-progress").length;
    const urgent = tasks.filter((t) => t.priority === "urgent" || t.priority === "high").length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, inProgress, urgent, completionRate };
  }, [tasks]);

  const handleCreateTask = (taskInput: CreateTaskInput) => {
    dispatch(addTask(taskInput));
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Enterprise Task & Architecture Workspace"
        description="Production architecture with Redux Toolkit (RTK), shadcn/ui, clean modular code separation, and comprehensive error handling."
        badge="Live Redux State"
      >
        <Button onClick={() => setIsCreateOpen(true)} className="gap-2 shadow-xs">
          <Plus className="w-4 h-4" />
          Create Task
        </Button>
      </PageHeader>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Tasks"
          value={stats.total}
          icon={<LayoutGrid className="w-5 h-5" />}
          trend={{ value: `${stats.completionRate}% Done`, isPositive: stats.completionRate >= 50 }}
          description="Managed in Redux store"
        />
        <StatCard
          title="In Progress"
          value={stats.inProgress}
          icon={<Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
          description="Active workflow sprints"
        />
        <StatCard
          title="Completed"
          value={stats.completed}
          icon={<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
          trend={{ value: "+100%", isPositive: true }}
          description="Verified items"
        />
        <StatCard
          title="High / Urgent Priority"
          value={stats.urgent}
          icon={<Flame className="w-5 h-5 text-rose-600 dark:text-rose-400" />}
          description="Attention required"
        />
      </div>

      {/* Main Tabs: Tasks, Error Handling Sandbox, Architecture Overview */}
      <Tabs defaultValue="tasks" className="space-y-6">
        <TabsList className="bg-muted/80 p-1 border">
          <TabsTrigger value="tasks" className="gap-2 text-xs md:text-sm">
            <Boxes className="w-4 h-4" />
            Task Management ({tasks.length})
          </TabsTrigger>
          <TabsTrigger value="error-handling" className="gap-2 text-xs md:text-sm">
            <ShieldAlert className="w-4 h-4 text-rose-500" />
            Error Handling Sandbox
          </TabsTrigger>
          <TabsTrigger value="architecture" className="gap-2 text-xs md:text-sm">
            <Code2 className="w-4 h-4" />
            Architecture Blueprint
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Task Management */}
        <TabsContent value="tasks" className="space-y-6">
          <TaskFilters />

          {filteredTasks.length === 0 ? (
            <EmptyState
              title="No tasks found"
              description="No tasks match the selected filter criteria or search query."
              actionLabel="Create New Task"
              onAction={() => setIsCreateOpen(true)}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </TabsContent>

        {/* Tab 2: Error Handling Sandbox */}
        <TabsContent value="error-handling" className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-xl border space-y-1">
            <h3 className="font-semibold text-sm">Interactive Error Testing Lab</h3>
            <p className="text-xs text-muted-foreground">
              Test how both UI React Error Boundaries and API / RTK Query errors are caught, handled gracefully, and surfaced without crashing the application.
            </p>
          </div>
          <ErrorSandbox />
        </TabsContent>

        {/* Tab 3: Architecture Blueprint */}
        <TabsContent value="architecture" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-semibold text-base">Redux Toolkit Architecture</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                App Router SSR-safe <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">StoreProvider</code> with <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">useRef</code> singleton instantiation. Includes typed hooks (<code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">useAppDispatch</code>, <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">useAppSelector</code>) and RTK Query services with cache tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-semibold text-base">shadcn/ui & Clean Design</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modern accessible primitives with Tailwind CSS v4 variables: Dialog, Card, Input, Button, Badge, DropdownMenu, Skeleton, Sonner, Tabs, and Separator.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-semibold text-base">Multi-Level Error Handling</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                App Router <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">error.tsx</code>, root <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">global-error.tsx</code>, component-level <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">ErrorBoundary</code>, custom <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">AppError</code> classes, and unified API response helpers.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Create Task Modal */}
      <TaskDialog
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
}
