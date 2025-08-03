// ============================================================================
// MIDDLEWARE.JS - Authentication and Route Protection
// ============================================================================
// This middleware handles authentication and route protection using Clerk.
// It defines public and protected routes, ensuring proper access control.
// ============================================================================

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

/**
 * Define routes that are publicly accessible without authentication
 * These routes can be accessed by anyone, including unauthenticated users
 */
const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',      // Sign-in page and any sub-routes
    '/sign-up(.*)',      // Sign-up page and any sub-routes  
    '/',                 // Homepage - accessible to all users
    '/api/webhooks(.*)', // Webhook endpoints - need to be public for external services
]);

/**
 * Define routes that require authentication
 * Users must be signed in to access these routes
 */
const isProtectedRoute = createRouteMatcher([
    '/teacher(.*)',      // Teacher dashboard and related pages
    '/api/courses(.*)',  // Course API endpoints - require authentication
    '/test(.*)',         // Test/exam related routes
]);

/**
 * Main middleware function that handles authentication logic
 * @param {Function} auth - Clerk auth function
 * @param {Request} req - Incoming request object
 */
const middleware = clerkMiddleware(async (auth, req) => {
    // Check if the current route requires authentication
    if (isProtectedRoute(req)) {
        await auth.protect(); // Redirect to sign-in if not authenticated
    }

    // Additional protection for course API routes
    // This provides double protection for critical API endpoints
    if (req.nextUrl.pathname.startsWith('/api/courses')) {
        await auth.protect();
    }
});

export default middleware;

/**
 * Configuration object that defines which routes this middleware should run on
 * Uses Next.js matcher patterns to include/exclude specific paths
 */
export const config = {
    matcher: [
        // Skip Next.js internals and static files (images, CSS, JS, etc.)
        // unless they contain search parameters
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

        // Always run middleware for API routes and tRPC endpoints
        '/(api|trpc)(.*)',
    ],
};