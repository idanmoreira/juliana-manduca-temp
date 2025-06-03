
import { useEffect, useState } from "react";

const HumanDesignWidget = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const iframe = document.getElementById('chartWidget') as HTMLIFrameElement;
      if (iframe && event.data && typeof event.data === 'string') {
        const originalHeight = 450;
        const newHeight = originalHeight + parseInt(event.data, 10);
        iframe.style.height = newHeight + 'px';
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="human-design">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C214A] to-[#161627]">
        <img 
          src="/lovable-uploads/7be71fe0-0e97-429f-929c-ab51bc8f11fd.png"
          alt="Waterfall meditation"
          className="absolute inset-0 w-full h-full object-cover opacity-8"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Gere seu Mapa de Desenho Humano
          </h2>
          <p className="text-xl text-[#FBEBBD] max-w-3xl mx-auto">
            Descubra seu tipo energético e como você foi designado para navegar pela vida
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          {isMobile ? (
            <iframe 
              id="chartWidget" 
              src="https://neutrinoplatform.com/widget/chart/new?apiKey=6dc1fa162b1dda904f9649f365496e3d9fe0166f&mobile=1" 
              style={{ width: '100%', height: '450px' }} 
              frameBorder="0"
              className="rounded-xl"
            />
          ) : (
            <iframe 
              id="chartWidget" 
              src="https://neutrinoplatform.com/widget/chart/new?apiKey=6dc1fa162b1dda904f9649f365496e3d9fe0166f" 
              style={{ width: '100%', height: '450px' }} 
              frameBorder="0"
              className="rounded-xl"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HumanDesignWidget;
