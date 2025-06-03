import { useState } from "react";
const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const services = [{
    id: "anual",
    title: "Direcionamento Anual",
    price: "€70,00 ou R$ 420,00",
    description: "O Direcionamento Anual é a leitura do seu momento atual, e como os trânsitos planetários de hoje - e durante os próximos 12 meses, estão atuando no seu mapa! Nos mostra o seu momento de vida, o foco do ano, as oportunidades, desafios e pontos de desenvolvimento.",
    fullDescription: "Para as orientações anuais, utilizamos a observação do Céu atual por meio de diversas técnicas, incluindo a famosa Revolução Solar! Não é necessário fazer somente próximo ao aniversário! As orientações serão para os 12 meses a partir do dia do atendimento."
  }, {
    id: "astrocartografia",
    title: "Astrocartografia",
    price: "€70,00 ou R$ 420,00",
    description: "Nessa técnica, o seu Mapa Natal é posicionado no Mapa Mundi, sendo possível entender a sua relação com os diferentes países, cidades e culturas.",
    fullDescription: "Durante a sessão, compreendemos quais as oportunidades e desafios de cada lugar no mundo para você, e até mesmo o que te motivou a sair do seu lugar de origem se você é imigrante, indo além das motivações externas. Com a Astrocartografia, é possível escolher o próximo destino com mais consciência."
  }, {
    id: "realocado",
    title: "Mapa Realocado",
    price: "€70,00 ou R$ 420,00",
    description: "O Mapa Realocado é ideal para você que mora em um país ou cidade diferente da do nascimento e gostaria de entender com profundidade a experiência nesse outro lugar.",
    fullDescription: "Nessa técnica, você conhece o seu mapa 'de nascimento' nesse novo local, e compreende melhor as experiências que vivenciará ou já vivenciou, a sua conexão, o que realmente te levou até esse lugar (O chamado da Alma - e não os motivos externos)."
  }, {
    id: "infantil",
    title: "Mapa Infantil",
    price: "€65,00 ou R$ 380,00",
    description: "O Mapa Infantil é uma leitura feita para os adultos responsáveis pela criança com o intuito de colaborar para o desenvolvimento e melhor organização da Rotina.",
    fullDescription: "Durante a leitura, é abordado sobre o sono da criança, as atividades que podem colaborar com o desenvolvimento infantil e suas habilidades naturais, assim como os possíveis desafios e a relação com os familiares e pessoas mais próximas de convivência."
  }, {
    id: "mensal",
    title: "Direcionamento Mensal",
    price: "€50,00 ou R$ 280,00",
    description: "Esse atendimento é uma união das diversas abordagens que eu trabalho além da Astrologia, como o Sagrado Feminino (Ciclo Menstrual), Desenho Humano, PNL e Constelação Sistêmica.",
    fullDescription: "Durante as sessões, vou te ensinar a acompanhar o Ciclo da Lua Externa e dos Trânsitos Astrológicos do mês em consonância com o seu Ciclo Menstrual, o que irá te possibilitar um planejamento mensal mais consciente, produtivo e orgânico."
  }, {
    id: "natal",
    title: "Mapa Natal",
    price: "€70,00 ou R$ 420,00",
    description: "Análise completa do seu mapa astral natal com interpretação detalhada dos planetas, casas e aspectos.",
    fullDescription: "Uma leitura profunda da sua personalidade, talentos naturais, desafios e propósito de vida baseada na posição dos astros no momento do seu nascimento."
  }];
  return <section className="py-20 px-4 relative overflow-hidden" id="servicos">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161627] to-[#2C214A]">
        <img src="/lovable-uploads/ef832c2a-3bf9-4df6-b8c9-9a42c0c80667.png" alt="Stone bridge" className="absolute inset-0 w-full h-full opacity-5 object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Atendimentos</h2>
          <p className="text-xl text-[#FBEBBD] max-w-3xl mx-auto">
            Descubra qual consulta astrológica é ideal para o seu momento de vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => <div key={service.id} className="group relative" onMouseEnter={() => setHoveredService(service.id)} onMouseLeave={() => setHoveredService(null)}>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-[#A530F2]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <div className="text-2xl font-bold text-[#F3C63E] mb-4">
                  {service.price}
                </div>
                
                <p className="text-[#FBEBBD] leading-relaxed mb-6 flex-grow">
                  {hoveredService === service.id ? service.fullDescription : service.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-[#A530F2] to-[#48236A] hover:from-[#48236A] hover:to-[#A530F2] text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                  Agendar Agora
                </button>
              </div>
            </div>)}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Desenho Humano</h3>
            <div className="space-y-2 text-[#FBEBBD]">
              <div className="flex justify-between">
                <span>Sessão inicial + PDF</span>
                <span className="text-[#F3C63E] font-semibold">€70,00 ou R$ 420,00</span>
              </div>
              <div className="flex justify-between">
                <span>Inicial + aprofundamento + PDF</span>
                <span className="text-[#F3C63E] font-semibold">€107,00 ou R$ 620,00</span>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Planos Especiais</h3>
            <div className="space-y-2 text-[#FBEBBD]">
              <div className="flex justify-between">
                <span>Plano trimestral</span>
                <span className="text-[#F3C63E] font-semibold">€105,00 ou R$ 630,00</span>
              </div>
              <div className="flex justify-between">
                <span>Trânsitos do mês - áudio</span>
                <span className="text-[#F3C63E] font-semibold">€20,00 ou R$ 120,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;