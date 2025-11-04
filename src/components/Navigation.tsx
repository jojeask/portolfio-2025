import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold"
          >
            <span className="text-gradient">[YourName]</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top duration-300">
            <button 
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
