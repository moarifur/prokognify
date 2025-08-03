// ============================================================================
// SIGN-IN PAGE.JSX - Sign In Page Component
// ============================================================================
// Simple page component that renders Clerk's SignIn component
// Handles user authentication and sign-in flow.
// ============================================================================

import { SignIn } from '@clerk/nextjs'

/**
 * Sign-in page component
 * Renders Clerk's pre-built SignIn component with default styling and functionality
 * @returns {JSX.Element} Clerk SignIn component
 */
const SignInPage = () => <SignIn />

export default SignInPage;