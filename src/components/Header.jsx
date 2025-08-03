// ============================================================================
// HEADER.JSX - Main Navigation Header
// ============================================================================
// Primary navigation component containing logo, search, authentication buttons,
// and theme toggle. Fixed positioning for persistent navigation.
// ============================================================================

"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BookMarkedIcon, BookOpen } from "lucide-react";
import Link from "next/link";
import SearchInput from "@/components/SearchInput";
import {DarkModeToggle} from "@/components/DarkModeToggle";
import {Button} from "@/components/ui/button";

/**
 * Header component with navigation, search, and authentication
 * Fixed position header that stays at top of viewport
 * @returns {JSX.Element} Complete header with navigation elements
 */
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between gap-4">

                    {/* Left section: Logo and Search */}
                    <div className="flex items-center gap-4">
                        {/* Brand logo and name */}
                        <Link
                            href="/"
                            prefetch={false} // Disable prefetching for performance
                            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
                        >
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                                Prokognify
                            </span>
                        </Link>

                        {/* Search input component */}
                        <SearchInput />
                    </div>

                    {/* Right section: Navigation and Authentication */}
                    <div className="flex items-center space-x-2 md:space-x-4">

                        {/* My Courses navigation link */}
                        <nav>
                            <Link
                                prefetch={false}
                                href="/my-courses"
                                className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                            >
                                <BookMarkedIcon className="h-4 w-4" />
                                <span className="hidden md:block">My Courses</span> {/* Hide text on mobile */}
                            </Link>
                        </nav>

                        {/* Theme toggle button */}
                        <DarkModeToggle />

                        {/* Conditional authentication UI based on sign-in status */}
                        <SignedIn>
                            {/* Show user button when signed in */}
                            <UserButton />
                        </SignedIn>

                        <SignedOut>
                            {/* Show sign-in button when signed out */}
                            <SignInButton mode="modal">
                                <Button variant="outline" size="default">
                                    Sign In
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
