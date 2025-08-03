// ============================================================================
// THEME-PROVIDER.JSX - Theme Management Component
// ============================================================================
// Wrapper component for next-themes that provides dark/light theme switching
// functionality throughout the application.
// ============================================================================

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Custom theme provider component that wraps next-themes
 * Provides theme context to all child components
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to wrap
 * @param {...Object} props - Additional props passed to NextThemesProvider
 * @returns {JSX.Element} Theme provider wrapper
 */
export const ThemeProvider = ({ children, ...props }) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};