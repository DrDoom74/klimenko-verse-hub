
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-brand-purple">
            A.Klimenko
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-brand-purple transition-colors">Обо мне</a>
            <a href="#expertise" className="text-gray-700 hover:text-brand-purple transition-colors">Экспертиза</a>
            <a href="#services" className="text-gray-700 hover:text-brand-purple transition-colors">Услуги</a>
            <a href="#projects" className="text-gray-700 hover:text-brand-purple transition-colors">Проекты</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-purple transition-colors">Контакты</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Contact button - shown only on desktop */}
          <Button asChild className="hidden md:inline-block btn-primary">
            <a href="#contact">Связаться</a>
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mt-2 animate-fade-in">
            <nav className="flex flex-col space-y-4 py-2">
              <a href="#about" className="text-gray-700 hover:text-brand-purple transition-colors" onClick={toggleMenu}>Обо мне</a>
              <a href="#expertise" className="text-gray-700 hover:text-brand-purple transition-colors" onClick={toggleMenu}>Экспертиза</a>
              <a href="#services" className="text-gray-700 hover:text-brand-purple transition-colors" onClick={toggleMenu}>Услуги</a>
              <a href="#projects" className="text-gray-700 hover:text-brand-purple transition-colors" onClick={toggleMenu}>Проекты</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-purple transition-colors" onClick={toggleMenu}>Контакты</a>
              <Button asChild className="w-full btn-primary">
                <a href="#contact">Связаться</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
