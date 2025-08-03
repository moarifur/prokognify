// ============================================================================
// AUTH LAYOUT.JSX - Authentication Pages Layout
// ============================================================================
// This component provides a centered layout container specifically designed for
// authentication-related pages (sign-in, sign-up, password reset, etc.).
//
// Key Features:
// - Centers content both vertically and horizontally
// - Provides full viewport height container
// - Works with Clerk.js authentication components
// - Minimal styling to avoid conflicts with auth form styling
//
// Usage:
// Wrap authentication pages with this layout to ensure consistent presentation
// across all auth-related screens.
// ============================================================================

import React from 'react';

/**
 * AuthLayout Component
 *
 * Creates a centered container for authentication forms. This layout is specifically
 * designed to work with Clerk.js authentication components but can be used with any
 * authentication form components.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components (typically authentication forms)
 * @returns {JSX.Element} Centered layout container for auth forms
 *
 * @example
 * // Basic usage with Clerk.js SignIn component
 * <AuthLayout>
 *   <SignIn />
 * </AuthLayout>
 *
 * @example
 * // Usage with custom auth form
 * <AuthLayout>
 *   <CustomAuthForm />
 * </AuthLayout>
 */
const AuthLayout = ({ children }) => {
    return (
        // Main container div
        // - h-full: Takes full viewport height
        // - flex: Enables flexbox layout
        // - items-center: Centers children vertically
        // - justify-center: Centers children horizontally
        <div className="h-full flex items-center justify-center">
            {/*
              Child components (authentication forms)
              This will typically be Clerk.js components like <SignIn /> or <SignUp />
              but can work with any authentication form components
            */}
            {children}
        </div>
    );
};

export default AuthLayout;

// ============================================================================
// COMPONENT METADATA (for documentation generation)
// ============================================================================
// Component Type: Layout Component
// Category: Authentication
// Requires: React
// OptionalDependencies: None
// Testability: High (simple presentation component)
// Reusability: High (can be used with any auth forms)
// Accessibility: Inherits from child components
// ============================================================================