// HomePage component - serves as the main landing page of the application
import Hero from "@/components/Hero";

const HomePage = () => {
    return (
        <>
            {/* Renders the Hero component which typically contains the main banner/header section
                with key marketing messages and call-to-action */}
            <Hero />

            {/* Additional page sections can be added here when needed:
                - Features
                - Testimonials
                - Course listings
                - etc.
            */}
        </>
    );
};

export default HomePage;