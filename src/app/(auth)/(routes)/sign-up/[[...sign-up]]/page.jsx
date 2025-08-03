// ============================================================================
// SIGN-UP PAGE.JSX - Sign Up Page Component
// ============================================================================
// Simple page component that renders Clerk's SignUp component
// Handles user registration and account creation flow.
// ============================================================================

import { SignUp } from '@clerk/nextjs'

/**
 * Sign-up page component
 * Renders Clerk's pre-built SignUp component with default styling and functionality
 * @returns {JSX.Element} Clerk SignUp component
 */
const SignUpPage = () => <SignUp />

export default SignUpPage;