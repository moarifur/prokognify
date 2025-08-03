// ============================================================================
// SIGN-UP PAGE.JSX - Sign Up Page Component
// ============================================================================
// Simple page component that renders Clerk's SignUp component
// Handles user registration and account creation flow.
//
// Features:
// - Uses Clerk's pre-built authentication components
// - Handles email/password and OAuth sign-up
// - Includes form validation and error handling
// - Supports password strength requirements
// - Manages user session creation
//
// Dependencies:
// - @clerk/nextjs for authentication
// ============================================================================

import { SignUp } from '@clerk/nextjs'

/**
 * SignUpPage Component
 * ===================
 * Renders the user registration interface using Clerk's authentication system.
 * Provides a complete sign-up flow including:
 * - Email verification
 * - Password creation
 * - Social OAuth options (if configured)
 * - Error handling and validation
 *
 * @component
 * @example
 * return <SignUpPage />
 *
 * @returns {JSX.Element} Clerk's pre-configured SignUp component with default styling
 */
const SignUpPage = () => (
    // Clerk's SignUp component handles all registration logic internally
    <SignUp
        // Note: Additional props can be passed here to customize behavior:
        // - path: Custom redirect path after sign-up
        // - routing: Path routing strategy
        // - signInUrl: Custom sign-in page URL
        // - appearance: Custom UI theming
    />
)

export default SignUpPage;