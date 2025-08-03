// ============================================================================
// SEARCHINPUT.JSX - Course Search Component
// ============================================================================
// Provides search functionality for courses with form submission handling
// and navigation to search results page.
// ============================================================================

"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Search input component for finding courses
 * Handles user input and navigation to search results
 * @returns {JSX.Element} Search form with input field and search icon
 */
const SearchInput = () => {
    const router = useRouter(); // Next.js router for navigation
    const [searchQuery, setSearchQuery] = useState(""); // Current search query state

    /**
     * Handle form submission for search
     * Navigates to search results page with encoded query
     * @param {Event} e - Form submission event
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Only navigate if search query has content after trimming whitespace
        if (searchQuery.trim()) {
            // Navigate to search results page with URL-encoded query
            router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full flex-1 max-w-[300px]" // Responsive width with max constraint
        >
            {/* Search input field */}
            <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
                className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {/* Search icon positioned absolutely within the input */}
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </form>
    );
};

export default SearchInput;