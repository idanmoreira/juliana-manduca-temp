import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#161627] via-[#2C214A] to-[#48236A]"></div>
        <img src="/lovable-uploads/a9b7d204-4422-4a26-8d18-6d72635d278c.png" alt="Mystical landscape" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
        <img src="/lovable-uploads/86a8b8c4-ee76-4969-9c14-9d7c7d1bab36.png" alt="Celestial cave" className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-soft-light" />
      </div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-[#FBEBBD] rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            Juliana Manduca
          </h1>
          
          <div className="text-xl md:text-2xl text-[#FBEBBD] mb-8 leading-relaxed">
            🌟 Vem que eu te ajudo a se planejar de forma consciente com os astros como bússola 💫
          </div>
          
          <div className="text-lg text-[#F3C63E] mb-8 font-medium">
        </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-[#A530F2] to-[#48236A] hover:from-[#48236A] hover:to-[#A530F2] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Agendar Consulta
            </Button>
            
            <a href="https://www.instagram.com/juliana.manduca/" target="_blank" rel="noopener noreferrer" className="text-[#FBEBBD] hover:text-[#F3C63E] transition-colors duration-300 flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#F3C63E]/50 backdrop-blur-sm">
              <span>@juliana.manduca</span>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;