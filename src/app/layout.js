// ============================================================================
// LAYOUT.JS - Root Application Layout
// ============================================================================
// This is the root layout component that wraps all pages in the application.
// It provides:
// - Global theme management through ThemeProvider
// - Basic HTML document structure
// - Application-wide metadata
// - Theme transition handling
//
// This file is required in Next.js 13+ and replaces _app.js and _document.js
// ============================================================================

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/**
 * Application metadata configuration
 * @constant {Object} metadata
 * @property {string} title - Default title for all pages
 * @property {string} description - Default description for SEO
 *
 * Note: This metadata can be overridden by individual pages
 */
export const metadata = {
    title: "ProKognify",
    description: "Build & Launch a Fullstack LMS Platform",
};

/**
 * RootLayout Component
 *
 * The foundational layout for all pages in the application. It:
 * - Sets up the HTML document structure
 * - Initializes theme management
 * - Applies global styles
 * - Handles system theme preferences
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The complete page structure
 *
 * @example
 * // Used automatically by Next.js to wrap all pages
 * <RootLayout>
 *   <PageContent />
 * </RootLayout>
 */
const RootLayout = ({ children }) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning // Prevents hydration mismatch warnings
        >
        <body>
        {/*
                  * ThemeProvider Configuration:
                  * - attribute="class": Uses CSS classes for theme switching
                  * - defaultTheme="system": Respects OS preference by default
                  * - enableSystem: Enables automatic system theme detection
                  * - disableTransitionOnChange: Prevents flash during theme changes
                  */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
};

export default RootLayout;