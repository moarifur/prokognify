// ============================================================================
// USER LAYOUT.JSX - User-Facing Layout Component
// ============================================================================
// Layout component for user-facing pages that includes Clerk authentication
// provider and common UI elements like header and main content area.
// ============================================================================

import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

/**
 * Layout component for authenticated user pages
 * Wraps content with Clerk authentication and common UI elements
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Page content to render
 * @returns {JSX.Element} Layout with header and main content area
 */
const UserLayout = ({ children }) => {
    return (
        <ClerkProvider> {/* Provide Clerk authentication context */}
            <div className="flex flex-col min-h-screen"> {/* Full-height flex container */}
                <Header /> {/* Fixed header with navigation */}
                <main children={`flex-1`}> {/* Main content area takes remaining space */}
                    {children}
                </main>
            </div>
        </ClerkProvider>
    );
};

export default UserLayout;