/**
 * Hero Component
 *
 * The main banner section at the top of the page that showcases the primary value proposition.
 * Designed to be visually striking while maintaining accessibility and responsive behavior.
 *
 * Key Features:
 * - Dynamic gradient overlays that adapt to light/dark themes
 * - Responsive typography that scales across devices
 * - Full-width container with content alignment
 * - Semantic HTML structure for accessibility
 * - Optimized for performance with minimal reflows
 *
 * Accessibility Considerations:
 * - Sufficient color contrast in both themes
 * - Text remains readable when zoomed
 * - Proper heading hierarchy
 */
const Hero = () => {
    return (
        // Outer container with viewport-relative height and full width
        // Uses relative positioning for child absolute elements
        <div className="relative h-[45vh] w-full overflow-hidden">

            {/*
             * Theme-aware overlay gradient
             * - Light mode: Dark overlay for better text contrast
             * - Dark mode: Lighter overlay to prevent excessive darkness
             */}
            <div
                className="absolute inset-0 bg-gradient-to-b
                          from-black/10 to-black/55
                          dark:from-white/15 dark:to-black/40"
                aria-hidden="true" // Hide from screen readers
            />

            {/*
             * Background blending gradient
             * Helps content transition smoothly into the page background
             * Uses theme-aware background colors via CSS variables
             */}
            <div
                className="absolute inset-0 bg-gradient-to-t
                          from-background via-background/80 to-background/20"
                aria-hidden="true"
            />

            {/*
             * Content container
             * - Uses container class for responsive max-width
             * - Flex layout for vertical centering
             * - Relative positioning for z-index control
             */}
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">

                {/*
                 * Text content wrapper
                 * - Limits width for optimal readability (66ch max)
                 * - Contains all textual content
                 */}
                <div className="max-w-3xl space-y-4">

                    {/*
                     * Main headline
                     * - Uses gradient text for visual impact
                     * - Responsive font sizing
                     * - Font weight for hierarchy
                     * - Accessible text treatment (bg-clip-text)
                     */}
                    <h1 className="text-5xl md:text-6xl font-bold
                                 bg-gradient-to-r from-foreground to-foreground/80
                                 bg-clip-text text-transparent">
                        Expand Your Knowledge with Our Courses
                    </h1>

                    {/*
                     * Supporting paragraph
                     * - Uses muted foreground for secondary importance
                     * - Appropriate font size for body text
                     * - Clear, concise messaging
                     */}
                    <p className="text-xl text-muted-foreground">
                        Discover a world of learning with our expertly crafted courses.
                        Learn from industry professionals and take your skills to the next
                        level.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;