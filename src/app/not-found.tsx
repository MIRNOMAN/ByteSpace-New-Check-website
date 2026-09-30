import Link from "next/link";
import { Compass, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-6 bg-card border rounded-2xl p-8 shadow-lg">
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="relative w-full h-full rounded-2xl bg-muted border flex items-center justify-center text-primary">
            <Compass className="w-10 h-10 animate-spin [animation-duration:8s]" />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">Page Not Found</h1>
          <p className="text-sm text-muted-foreground">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
