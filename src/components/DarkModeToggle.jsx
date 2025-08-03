// ============================================================================
// DARKMODETOGGLE.JSX - Theme Switching Component
// ============================================================================
// Toggle button component for switching between light and dark themes
// Uses next-themes for theme management with smooth transitions.
// ============================================================================

"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Dark mode toggle button component
 * Switches between light and dark themes with appropriate icons
 * @returns {JSX.Element} Toggle button with sun/moon icons
 */
export function DarkModeToggle() {
    const { theme, setTheme } = useTheme(); // Access theme state and setter

    /**
     * Toggle between light and dark themes
     * Switches to opposite of current theme
     */
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button onClick={toggleTheme} variant="outline" size="icon">
            {/* Sun icon - visible in light mode, hidden in dark mode */}
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />

            {/* Moon icon - hidden in light mode, visible in dark mode */}
            <Moon className="hidden h-[1.2rem] w-[1.2rem] transition-all dark:block" />

            {/* Screen reader accessibility text */}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
