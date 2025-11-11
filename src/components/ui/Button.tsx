"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition",
        variant === "default" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-transparent text-gray-700 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  )
}
