
const Footer = () => {
  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#161627] to-[#2C214A]">
        <img 
          src="/lovable-uploads/b3ef6201-24e6-486e-b0d3-96af8b86b89c.png"
          alt="Ancient stone bridge"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Pronta para descobrir os segredos dos astros?
          </h3>
          <p className="text-[#FBEBBD] mb-6 max-w-2xl mx-auto">
            Transforme sua vida com o poder da astrologia consciente. Agende sua consulta hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-[#A530F2] to-[#48236A] hover:from-[#48236A] hover:to-[#A530F2] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Agendar Consulta Agora
            </button>
            
            <a 
              href="https://www.instagram.com/juliana.manduca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FBEBBD] hover:text-[#F3C63E] transition-colors duration-300 flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#F3C63E]/50"
            >
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-[#FBEBBD]/70 text-sm">
            © 2024 Juliana Manduca. Todos os direitos reservados.
          </p>
          <p className="text-[#FBEBBD]/50 text-xs mt-2">
            JULIANAMANDUCA.COM.BR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
