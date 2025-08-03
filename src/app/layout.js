// ============================================================================
// LAYOUT.JS - Root Application Layout
// ============================================================================
// Root layout component that wraps the entire application with theme provider
// and sets up global metadata and HTML structure.
// ============================================================================

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/**
 * Application metadata for SEO and browser display
 * Used by Next.js for generating meta tags
 */
export const metadata = {
    title: "ProKognify",
    description: "Build & Launch a Fullstack LMS Platform",
};

/**
 * Root layout component that wraps all pages
 * Provides theme context and basic HTML structure
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Page content to render
 * @returns {JSX.Element} Complete HTML document structure
 */
const RootLayout = ({ children }) => {
    return (
        // Suppress hydration warnings for theme
        <html lang="en" suppressHydrationWarning>
        <body>
        {/* Theme provider with system theme detection */}
        <ThemeProvider
            attribute="class"           // Use class-based theme switching
            defaultTheme="system"       // Default to system preference
            enableSystem                // Allow system theme detection
            disableTransitionOnChange   // Prevent flash during theme changes
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
};

export default RootLayout;