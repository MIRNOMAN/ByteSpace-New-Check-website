import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  description?: string;
  className?: string;
  isLoading?: boolean;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  description,
  className,
  isLoading = false,
}: StatCardProps) {
  if (isLoading) {
    return (
      <Card className={cn("p-6 space-y-3", className)}>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-3 w-32" />
      </Card>
    );
  }

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-md border-border/80", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {icon && (
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold tracking-tight">{value}</div>
          {(trend || description) && (
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
              {trend && (
                <span
                  className={cn(
                    "font-semibold inline-flex items-center",
                    trend.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                  )}
                >
                  {trend.value}
                </span>
              )}
              {description && <span>{description}</span>}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
