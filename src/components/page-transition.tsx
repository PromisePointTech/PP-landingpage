import { ViewTransition } from "react";

/**
 * Cross-fades and lifts page content during route navigation. It wraps each
 * page rather than the layout, because layouts persist across navigations and
 * never enter or exit. See node_modules/next/dist/docs/01-app/02-guides/view-transitions.md
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      {children}
    </ViewTransition>
  );
}
