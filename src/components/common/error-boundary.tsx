"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { parseError } from "@/lib/errors/error-handler";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKey?: unknown;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.handleReset();
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const parsed = this.state.error ? parseError(this.state.error) : null;

      return (
        <Card className="border-destructive/30 bg-destructive/5 my-4 overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base text-destructive font-semibold">
                  Something went wrong
                </CardTitle>
                <CardDescription className="text-xs">
                  {parsed?.message || "An unexpected component error occurred."}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Error Code: {parsed?.code || "CLIENT_ERROR"}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
              >
                {this.state.showDetails ? (
                  <>
                    Hide Stack <ChevronUp className="h-3 w-3 ml-1" />
                  </>
                ) : (
                  <>
                    Show Stack <ChevronDown className="h-3 w-3 ml-1" />
                  </>
                )}
              </Button>
            </div>
            {this.state.showDetails && this.state.error && (
              <pre className="p-3 bg-muted rounded-md text-[11px] font-mono overflow-x-auto text-muted-foreground max-h-48 border">
                {this.state.error.stack || this.state.error.message}
              </pre>
            )}
          </CardContent>
          <CardFooter className="pt-1 pb-3 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={this.handleReset}
              className="gap-1.5 text-xs"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Try Again
            </Button>
          </CardFooter>
        </Card>
      );
    }

    return this.props.children;
  }
}
