import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 py-6 md:py-8 bg-muted/20 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-[10px]">
            BS
          </div>
          <span>ByteSpace Enterprise Template • Next.js 16 + Redux Toolkit + shadcn/ui</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Feature-Sliced Architecture</span>
          <span>Standardized Error Handling</span>
          <span>Production Ready</span>
        </div>
      </div>
    </footer>
  );
}
