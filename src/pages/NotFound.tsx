// src/pages/NotFound.tsx (RE-STYLED)

import { useLocation, Link } from "react-router-dom"; // Import Link for proper navigation
import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button component is available
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Keep the console logging for debugging purposes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    // Applied brand colors: background/5 for light contrast, text-secondary
    <div className="flex flex-col items-center justify-center min-h-screen bg-background/5">
      <h1 className="text-8xl md:text-10xl font-extrabold text-primary mb-4 font-serif">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6 font-sans text-center px-4">
        Page Not Found
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md text-center px-4">
        Oops! The requested page is currently out of the spotlight. It might
        have been moved or doesn't exist.
      </p>

      {/* Use the branded Button component for consistency */}
      <Button asChild variant="default" size="lg" className="text-lg">
        <Link to="/">
          <Home className="w-5 h-5 mr-2" />
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
