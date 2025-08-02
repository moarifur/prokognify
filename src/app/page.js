// app/page.js
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
            <h1 className="text-4xl font-bold">Welcome to My App</h1>

            <div className="flex gap-4">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
            </div>

            <ThemeToggle />

            <p className="text-muted-foreground">
                Click the moon/sun icon to toggle theme
            </p>
        </div>
    );
}