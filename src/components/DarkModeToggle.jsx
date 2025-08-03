"use client"; // Marks this as a Client Component for Next.js

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"; // Icons for light/dark mode
import { useTheme } from "next-themes"; // Theme management hook

/**
 * DarkModeToggle Component
 *
 * A button that toggles between light and dark theme modes.
 * - Uses next-themes for theme management
 * - Shows sun icon in light mode, moon icon in dark mode
 * - Includes screen-reader only text for accessibility
 * - Maintains proper icon visibility during theme transitions
 */
export function DarkModeToggle() {
    // Access theme context to get/set current theme
    const { theme, setTheme } = useTheme();

    /**
     * Toggles between light and dark themes
     * - Checks current theme and sets the opposite
     * - Handled by next-themes' setTheme function
     */
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            onClick={toggleTheme}
            variant="outline"  // Outline style from shadcn/ui
            size="icon"       // Makes button square for the icon
            aria-label="Toggle theme" // Accessibility label
        >
            {/* Sun icon - visible in light mode, hidden in dark */}
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />

            {/* Moon icon - hidden in light mode, visible in dark */}
            <Moon className="hidden h-[1.2rem] w-[1.2rem] transition-all dark:block" />

            {/* Screen reader only text for accessibility */}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}