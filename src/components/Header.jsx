// ============================================================================
// HEADER.JSX - Main Navigation Header
// ============================================================================
// Primary navigation component containing:
// - Application logo/branding
// - Global search input
// - Main navigation links
// - Theme toggle control
// - User authentication controls
//
// Features:
// - Fixed positioning with backdrop blur effect
// - Responsive design (mobile/desktop)
// - Conditional auth state rendering
// - Prefetch optimization
// ============================================================================

"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BookMarkedIcon, BookOpen } from "lucide-react";
import Link from "next/link";
import SearchInput from "@/components/SearchInput";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";

/**
 * Main application header with navigation and user controls.
 * Persists across all pages with fixed positioning at viewport top.
 *
 * @component
 * @example
 * return <Header />
 *
 * @property {boolean} prefetch - Next.js link prefetch optimization
 * @property {string} className - Tailwind classes for styling
 * @returns {React.ReactElement} The rendered header component
 */
const Header = () => {
    return (
        // Sticky header with semi-transparent background and border
        <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between gap-4">

                    {/* LEFT SECTION: Branding and Search */}
                    <div className="flex items-center gap-4">
                        {/* Brand logo with gradient text effect */}
                        <Link
                            href="/"
                            prefetch={false} // Disabled for performance on non-critical links
                            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
                            aria-label="Home"
                        >
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                                Prokognify
                            </span>
                        </Link>

                        {/* Global search component */}
                        <SearchInput />
                    </div>

                    {/* RIGHT SECTION: Navigation and User Controls */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/* My Courses link - transforms to pill shape on desktop */}
                        <nav aria-label="Main navigation">
                            <Link
                                prefetch={false}
                                href="/my-courses"
                                className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                                aria-label="My Courses"
                            >
                                <BookMarkedIcon className="h-4 w-4" />
                                <span className="hidden md:block">My Courses</span>
                            </Link>
                        </nav>

                        {/* Theme toggle component */}
                        <DarkModeToggle />

                        {/* Authentication state management */}
                        <div className="flex items-center">
                            <SignedIn>
                                {/* Shows when user is authenticated */}
                                <UserButton afterSignOutUrl="/" />
                            </SignedIn>
                            <SignedOut>
                                {/* Shows when user is not authenticated */}
                                <SignInButton mode="modal">
                                    <Button
                                        variant="outline"
                                        size="default"
                                        aria-label="Sign in"
                                    >
                                        Sign In
                                    </Button>
                                </SignInButton>
                            </SignedOut>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;