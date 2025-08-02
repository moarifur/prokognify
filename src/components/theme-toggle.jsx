"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button onClick={toggleTheme} variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
            <Moon className="hidden h-[1.2rem] w-[1.2rem] transition-all dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}