import {ThemeProvider} from "@/components/theme-provider";

import "./globals.css";

export const metadata = {
    title: "ProKognify",
    description: "Build & Launch a Fullstack LMS Platform",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
