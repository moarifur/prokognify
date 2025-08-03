import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/', // Homepage
    '/api/webhooks(.*)', // Webhook routes should be public
]);

const isProtectedRoute = createRouteMatcher([
    '/teacher(.*)',
    '/api/courses(.*)', // Protect course API routes
]);

const middleware = clerkMiddleware(async (auth, req) => {
    // Protect specific routes that require authentication
    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    // For API routes, ensure user is authenticated
    if (req.nextUrl.pathname.startsWith('/api/courses')) {
        await auth.protect();
    }
});

export default middleware;

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
