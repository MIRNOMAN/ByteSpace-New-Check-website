"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { clearAllNotifications } from "@/store/slices/ui-slice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Layers,
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

export function Navbar() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const notifications = useAppSelector((state) => state.ui.notifications);

  const completedCount = tasks.filter((t) => t.status === "completed").length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-foreground font-extrabold tracking-tight">ByteSpace</span>
              <span className="text-[10px] text-muted-foreground font-mono font-normal">Enterprise Architecture</span>
            </div>
          </Link>
          <Badge variant="outline" className="hidden md:inline-flex text-[10px] px-2 py-0 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
            Next 16 • Redux RTK • shadcn
          </Badge>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Live Task Badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tasks:</span>
            <span className="font-semibold text-foreground">
              {completedCount}/{tasks.length} Completed
            </span>
          </div>

          {/* Notifications Dropdown (connected to Redux ui-slice) */}
          <DropdownMenu>
            <DropdownMenuTrigger className="relative inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-muted text-foreground transition-colors cursor-pointer outline-none">
              <Bell className="w-4 h-4" />
              {notifications.length > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-2">
              <div className="flex items-center justify-between px-2 py-1.5">
                <DropdownMenuLabel className="p-0 text-xs font-semibold">
                  Notifications ({notifications.length})
                </DropdownMenuLabel>
                {notifications.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-[11px] text-muted-foreground hover:text-foreground px-1.5"
                    onClick={() => dispatch(clearAllNotifications())}
                  >
                    Clear all
                  </Button>
                )}
              </div>
              <DropdownMenuSeparator />
              <div className="max-h-64 overflow-y-auto space-y-1 py-1">
                {notifications.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-4">
                    No new notifications
                  </p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-2 text-xs rounded-lg hover:bg-muted/60 transition-colors flex items-start gap-2.5"
                    >
                      {n.type === "error" ? (
                        <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      ) : n.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-0.5 flex-1 min-w-0">
                        {n.title && <p className="font-semibold text-foreground text-[11px]">{n.title}</p>}
                        <p className="text-muted-foreground text-[11px] line-clamp-2">{n.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <div className="flex items-center gap-2 pl-2 border-l border-border/60">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold text-xs">
              {user?.name?.slice(0, 2).toUpperCase() || "AV"}
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-semibold leading-tight">{user?.name}</span>
              <span className="text-[10px] text-muted-foreground font-mono">{user?.role}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
