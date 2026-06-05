"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "../lib/utils";






const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {



  React.useEffect(() => {
    let scrollReached50 = false;
    let scrollReached98 = false;

  const handleScroll = () => {
    const scrollheight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollPercentage = currentScroll / scrollheight;

    if (scrollPercentage >= 0.5 && !scrollReached50) {
      scrollReached50 = true;
        window.gtag?.("event", "scroll_reached_50_percent", {
          event_category: "Scroll",
          event_label: "User scrolled past 50%",
        });
      }
      if (scrollPercentage >= 0.98 && !scrollReached98) {
        scrollReached98 = true; 
          window.gtag?.("event", "scroll_reached_98_percent", {
            event_category: "Scroll",
            event_label: "User scrolled to the bottom",
          });
        }
      };
  window.addEventListener("scroll", handleScroll);
  return () => 
    window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >

    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-1px",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-1px",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
