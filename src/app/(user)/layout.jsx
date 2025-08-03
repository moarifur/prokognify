/**
 * UserLayout - Layout component for authenticated user pages.
 * Wraps content with Clerk authentication provider and includes the site header.
 *
 * @param {React.ReactNode} children - The page content to be rendered within the layout
 * @returns {JSX.Element} The layout structure with header and main content area
 */
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const UserLayout = ({ children }) => {
    return (
        // ClerkProvider wraps the application to provide authentication context
        <ClerkProvider>
            {/* Main layout container with full viewport height */}
            <div className="flex flex-col min-h-screen">
                {/* Fixed header component */}
                <Header />

                {/* Main content area that grows to fill available space */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </ClerkProvider>
    );
};

export default UserLayout;