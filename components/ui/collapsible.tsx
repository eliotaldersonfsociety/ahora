// components/ui/collapsible.tsx
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn(
      "flex items-center justify-between w-full text-left font-medium transition-all hover:opacity-80",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
  </CollapsiblePrimitive.CollapsibleTrigger>
));
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn("overflow-hidden text-sm", className)}
    {...props}
  />
));
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
