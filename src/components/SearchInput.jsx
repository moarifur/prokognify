"use client"; // Marks this as a Client Component in Next.js

// Import necessary dependencies
import { Search } from "lucide-react"; // Search icon from Lucide React
import { useRouter } from "next/navigation"; // Next.js router for navigation
import { useState } from "react"; // React state hook

/**
 * SearchInput Component
 *
 * A reusable search input field with submission handling.
 * Features:
 * - Controlled input component
 * - Form submission handling
 * - Programmatic navigation on search
 * - Responsive design
 * - Accessible styling
 */
const SearchInput = () => {
    // Initialize router for programmatic navigation
    const router = useRouter();

    // State to manage the search query input
    const [searchQuery, setSearchQuery] = useState("");

    /**
     * Handles form submission:
     * - Prevents default form behavior
     * - Trims and validates the search query
     * - Navigates to search results page if query is valid
     * @param {Event} e - Form submission event
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Only navigate if search query is not empty after trimming
        if (searchQuery.trim()) {
            // Encode the search query for URL safety and navigate
            router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        // Search form with submission handler
        <form
            onSubmit={handleSubmit}
            className="relative w-full flex-1 max-w-[300px]" // Responsive sizing
            role="search" // ARIA role for accessibility
        >
            {/* Search input field */}
            <input
                type="text"
                placeholder="Search courses..." // Descriptive placeholder
                value={searchQuery} // Controlled component
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
                className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Search courses" // Accessibility label
            />

            {/* Search icon positioned absolutely within the input */}
            <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true" // Hide from screen readers (label is sufficient)
            />
        </form>
    );
};

export default SearchInput;