"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "@/components/common/error-boundary";
import { useLazyTriggerSimulatedErrorQuery } from "@/store/services/task-api";
import { useAppDispatch } from "@/store/hooks";
import { addNotification } from "@/store/slices/ui-slice";
import { toast } from "sonner";
import { AlertOctagon, Bug, ServerCrash, ShieldAlert, Check } from "lucide-react";
import { parseError } from "@/lib/errors/error-handler";

function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("Simulated React Runtime Crash! Error Boundary caught this successfully.");
  }
  return (
    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
      <span>Component is healthy and rendering normally. Click below to simulate a component crash.</span>
    </div>
  );
}

export function ErrorSandbox() {
  const [shouldCrash, setShouldCrash] = useState(false);
  const [triggerApiError, { isFetching }] = useLazyTriggerSimulatedErrorQuery();
  const dispatch = useAppDispatch();
  const [apiResult, setApiResult] = useState<string | null>(null);

  const handleSimulateApi500 = async () => {
    setApiResult(null);
    try {
      const res = await triggerApiError({ code: 500 }).unwrap();
      setApiResult(JSON.stringify(res, null, 2));
    } catch (err: unknown) {
      const parsed = parseError(err);
      toast.error(`API Error ${parsed.statusCode}: ${parsed.code}`, {
        description: parsed.message,
      });
      setApiResult(JSON.stringify(parsed, null, 2));
      dispatch(
        addNotification({
          type: "error",
          title: `Server Error (${parsed.statusCode})`,
          message: parsed.message,
        })
      );
    }
  };

  const handleSimulateApi400 = async () => {
    setApiResult(null);
    try {
      const res = await triggerApiError({ code: 400 }).unwrap();
      setApiResult(JSON.stringify(res, null, 2));
    } catch (err: unknown) {
      const parsed = parseError(err);
      toast.warning(`Validation Error (${parsed.statusCode})`, {
        description: parsed.message,
      });
      setApiResult(JSON.stringify(parsed, null, 2));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 1. Component Error Boundary Card */}
      <Card className="border-border/80">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <Bug className="w-4 h-4" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">React Error Boundary Sandbox</CardTitle>
              <CardDescription className="text-xs">
                Tests isolated component failure containment with reset recovery.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Our reusable <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">ErrorBoundary</code> catches client-side render exceptions, isolates the crash to this widget, and prevents the entire app from failing.
          </p>

          <ErrorBoundary resetKey={shouldCrash}>
            <BuggyComponent shouldThrow={shouldCrash} />
          </ErrorBoundary>

          <div className="flex items-center gap-2 pt-2">
            <Button
              variant={shouldCrash ? "outline" : "destructive"}
              size="sm"
              onClick={() => setShouldCrash(!shouldCrash)}
              className="text-xs gap-1.5"
            >
              <AlertOctagon className="w-3.5 h-3.5" />
              {shouldCrash ? "Reset Normal State" : "Simulate Runtime Crash"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 2. API & Network Error Handling */}
      <Card className="border-border/80">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ServerCrash className="w-4 h-4" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">API & RTK Query Error Handler</CardTitle>
              <CardDescription className="text-xs">
                Standardized error parsing, toast alerts, and Next.js route responses.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Triggers Next.js Route handlers with custom <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">AppError</code> classes. The response is normalized with status codes and logged to Redux.
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSimulateApi500}
              disabled={isFetching}
              className="text-xs gap-1.5 text-rose-600 border-rose-200 hover:bg-rose-50 dark:hover:bg-rose-950/30"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Simulate 500 DB Error
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSimulateApi400}
              disabled={isFetching}
              className="text-xs gap-1.5 text-amber-600 border-amber-200 hover:bg-amber-50 dark:hover:bg-amber-950/30"
            >
              <AlertOctagon className="w-3.5 h-3.5" />
              Simulate 400 Validation Error
            </Button>
          </div>

          {apiResult && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Normalized Error Payload:
              </span>
              <pre className="p-3 bg-muted/60 border rounded-lg text-[11px] font-mono overflow-x-auto text-foreground max-h-36">
                {apiResult}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
