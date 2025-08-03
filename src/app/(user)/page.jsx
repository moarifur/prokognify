// ============================================================================
// HOMEPAGE.JSX - Application Home Page
// ============================================================================
// Landing page component with welcome message and example buttons
// demonstrating the design system and UI components.
// ============================================================================

import { Button } from "@/components/ui/button";

/**
 * Home page component with welcome message and UI examples
 * Serves as the main landing page for the application
 * @returns {JSX.Element} Centered welcome content with example buttons
 */
const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
            {/* Main heading */}
            <h1 className="text-4xl font-bold">Welcome to My App</h1>

            {/* Example button group showcasing different variants */}
            <div className="flex gap-4">
                <Button variant="default">Primary</Button>        {/* Default primary button */}
                <Button variant="secondary">Secondary</Button>    {/* Secondary button style */}
                <Button variant="destructive">Destructive</Button> {/* Error/danger button */}
            </div>
        </div>
    );
};

export default HomePage;