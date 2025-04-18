
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Globe, Moon, Sun, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "EN" ? "FR" : "EN");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-machgari-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            M
          </div>
          <span className="text-xl font-bold text-machgari-700 dark:text-machgari-400">
            MachGari
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-foreground hover:text-machgari-600 transition-all-colors slide-hover"
          >
            About Us
          </a>
          <Link
            to="/services"
            className="text-foreground hover:text-machgari-600 transition-all-colors slide-hover"
          >
            Services
          </Link>
          <a
            href="#market-dashboard"
            className="text-foreground hover:text-machgari-600 transition-all-colors slide-hover"
          >
            Market Data
          </a>
        </nav>

        {/* Right Side - Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="text-foreground hover:text-machgari-600"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs font-medium">{currentLanguage}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-foreground hover:text-machgari-600"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Link to="/login">
            <Button
              variant="ghost"
              className="text-foreground hover:text-machgari-600"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </Button>
          </Link>

          <Link to="/signup">
            <Button className="bg-machgari-600 hover:bg-machgari-700 text-white">
              <UserPlus className="h-5 w-5 mr-2" />
              Signup
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-foreground hover:text-machgari-600 transition-all-colors py-2 px-4 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <Link
              to="/services"
              className="text-foreground hover:text-machgari-600 transition-all-colors py-2 px-4 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <a
              href="#market-dashboard"
              className="text-foreground hover:text-machgari-600 transition-all-colors py-2 px-4 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Market Data
            </a>
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center text-foreground"
              >
                <Globe className="h-4 w-4 mr-2" />
                {currentLanguage}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="flex items-center text-foreground"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" /> Light
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" /> Dark
                  </>
                )}
              </Button>
            </div>
            <div className="flex flex-col space-y-3 pt-3">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>

              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-machgari-600 hover:bg-machgari-700 text-white">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Signup
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
