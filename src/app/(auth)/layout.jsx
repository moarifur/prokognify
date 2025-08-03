// ============================================================================
// AUTH LAYOUT.JSX - Authentication Pages Layout
// ============================================================================
// Simple layout component for authentication pages (sign-in, sign-up)
// Centers the authentication forms on the page.
// ============================================================================

import React from 'react';

/**
 * Layout component for authentication pages
 * Centers authentication forms (sign-in, sign-up) on the page
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Authentication form components
 * @returns {JSX.Element} Centered container for auth forms
 */
const AuthLayout = ({children}) => {
    return (
        <div className="h-full flex items-center justify-center">
            {children} {/* Clerk authentication components */}
        </div>
    );
};

export default AuthLayout;
