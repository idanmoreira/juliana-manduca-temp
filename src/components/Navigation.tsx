import { useState, useEffect } from "react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#161627]/80 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-white">Juliana Manduca</div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-[#FBEBBD] hover:text-[#F3C63E] transition-colors duration-300">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-[#FBEBBD] hover:text-[#F3C63E] transition-colors duration-300">
              Serviços
            </button>
            <button onClick={() => scrollToSection('human-design')} className="text-[#FBEBBD] hover:text-[#F3C63E] transition-colors duration-300">
              Desenho Humano
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-[#FBEBBD] hover:text-[#F3C63E] transition-colors duration-300">
              Sobre
            </button>
          </div>

          <button className="bg-gradient-to-r from-[#A530F2] to-[#48236A] text-white px-6 py-2 rounded-full font-medium hover:from-[#48236A] hover:to-[#A530F2] transition-all duration-300 transform hover:scale-105">
            Contato
          </button>
        </div>
      </div>
    </nav>;
};
export default Navigation;