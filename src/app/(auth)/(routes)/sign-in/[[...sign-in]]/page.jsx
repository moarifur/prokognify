// ============================================================================
// SIGN-IN PAGE.JSX - Sign In Page Component
// ============================================================================
// Simple page component that renders Clerk's SignIn component
// Handles user authentication and sign-in flow.
//
// Features:
// - Uses Clerk's pre-built authentication UI
// - Supports multiple authentication methods (email, OAuth, etc.)
// - Handles form validation and error states
// - Provides password recovery options
//
// Dependencies:
// - @clerk/nextjs for authentication
// ============================================================================

import { SignIn } from '@clerk/nextjs'

/**
 * SignInPage Component
 * ===================
 * Renders Clerk's pre-built sign-in interface with default configuration.
 *
 * The component provides:
 * - Email/password authentication
 * - Social OAuth providers (if configured)
 * - "Forgot password" flow
 * - "Sign up" redirect option
 *
 * Clerk handles all authentication state and validation automatically.
 *
 * @returns {JSX.Element} Clerk's SignIn component with default styling and behavior
 *
 * @example
 * // Basic usage
 * <SignInPage />
 */
const SignInPage = () => (
    // Clerk's SignIn component with default configuration
    <SignIn
        // Uncomment to customize paths:
        // path="/sign-in"
        // routing="path"
        // signUpUrl="/sign-up"
    />
)

export default SignInPage;