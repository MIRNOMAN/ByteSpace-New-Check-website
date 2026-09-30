import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FolderKanban, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  children?: ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
  children,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 md:p-12 text-center rounded-2xl border border-dashed border-border/80 bg-card/40 backdrop-blur-xs",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center text-muted-foreground mb-4">
        {icon || <FolderKanban className="w-7 h-7" />}
      </div>
      <h3 className="text-lg font-semibold tracking-tight mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} size="sm" className="gap-2 shadow-xs">
          <Plus className="w-4 h-4" />
          {actionLabel}
        </Button>
      )}
      {children}
    </div>
  );
}
