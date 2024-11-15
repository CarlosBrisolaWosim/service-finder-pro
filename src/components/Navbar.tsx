import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToBenefits = () => {
    const element = document.querySelector("#benefits");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    const element = document.querySelector("#pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Wosim
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Início
            </Link>
            <button 
              onClick={scrollToBenefits}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={scrollToPricing}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Seja um Profissional
            </button>
            <Link to="/login">
              <Button variant="outline" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Entrar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <button
                onClick={() => {
                  scrollToBenefits();
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => {
                  scrollToPricing();
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Seja um Profissional
              </button>
              <Link
                to="/login"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;