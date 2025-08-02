

import "./globals.css";

export const metadata = {
    title: "ProKognify",
    description: "Build & Launch a Fullstack LMS Platform",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
