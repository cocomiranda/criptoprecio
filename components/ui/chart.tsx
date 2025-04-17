"use client"

import type * as React from "react"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ChartContainer({ children, ...props }: ChartContainerProps) {
  return <div {...props}>{children}</div>
}
