// src/components/Navigation.tsx (REFINED for Routing and Active State)

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Logic to determine the current active path (for highlighting)
  const getPath = (id: string) => (id === "home" ? "/" : `/${id}`);

  // Custom scroll/navigate handler
  const handleNavLinkClick = (id: string) => {
    const path = getPath(id);

    // If on the homepage, scroll. Otherwise, navigate.
    if (location.pathname === "/" && document.getElementById(id)) {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // For all other cases (e.g., on /portfolio page), navigate to the target path.
      // This uses the <Link> component's routing ability.
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            {/* Logo links back to Home */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Zewotir
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const path = getPath(link.id);
              // Determine if the current link is active
              const isActive = location.pathname === path;

              return (
                <Link
                  key={link.id}
                  to={path}
                  onClick={() => handleNavLinkClick(link.id)}
                  // 💡 Desktop Active/Hover Update: Ensure primary color is used for active state and text on hover.
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary" // Active style: Primary text and border
                      : "text-foreground hover:text-primary" // Inactive style: Primary text on hover
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              // Contact button handles both scroll and navigation if needed
              onClick={() => navigate("/contact")}
              variant="default" // Use 'default' variant for the primary button
              className="hover:shadow-glow transition-all"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button (remains the same) */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => {
              const path = getPath(link.id);
              const isActive = location.pathname === path;
              return (
                <Link
                  key={link.id}
                  to={path}
                  onClick={() => handleNavLinkClick(link.id)}
                  // 💡 Mobile Active/Hover Update: Use text-primary and bg-primary/10 for hover/inactive states.
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold" // Active mobile style (Keep as is for high contrast)
                      : "text-foreground hover:bg-primary/10 hover:text-primary" // Inactive mobile style: Primary text and a light primary background on hover
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              onClick={() => handleNavLinkClick("contact")}
              variant="default"
              className="w-full mt-2"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
