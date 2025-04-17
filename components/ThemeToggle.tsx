"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-1 bg-transparent border-none focus:outline-none">
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5 text-gray-200" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
