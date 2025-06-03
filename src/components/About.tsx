const About = () => {
  return <section className="py-20 px-4 relative overflow-hidden" id="sobre">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161627] to-[#48236A]">
        <img src="/lovable-uploads/fe4f2504-945a-4512-a704-53da086568da.png" alt="Coastal serenity" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Como funciona?
            </h2>
            
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-[#F3C63E] mb-3">📅 Como acontecem os atendimentos?</h3>
                <p className="text-[#FBEBBD]">Ao vivo: Plataforma Zoom - online<br />Gravado - com suporte no whatsapp</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-[#F3C63E] mb-3">⏰ Qual o tempo de duração?</h3>
                <p className="text-[#FBEBBD]">Aproximadamente 1h30 cada sessão</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-[#F3C63E] mb-3">💳 Qual a forma de pagamento?</h3>
                <p className="text-[#FBEBBD]">Transferência bancária<br />(consulte opções de parcelamento)</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-[#F3C63E] mb-3">📋 Recebo algum material?</h3>
                <p className="text-[#FBEBBD]">Sim! Todos os atendimentos recebem uma imagem do seu mapa, arquivo em pdf utilizado durante a sessão e a gravação em áudio. Os arquivos serão enviados pelo "wetransfer" para o seu e-mail, e você deverá fazer o download nos próximos 7 dias.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <img alt="Juliana Manduca" className="w-full h-96 object-cover rounded-2xl mb-6" src="/lovable-uploads/75383be3-e4fa-417d-84d4-6bb7a457bdfc.jpg" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">Juliana Manduca</h3>
                <p className="text-[#FBEBBD] mb-4">Astróloga & Contoterapeuta</p>
                <div className="text-[#F3C63E] font-semibold">✨ Milhares de atendimentos realizados por todo o mundo 🌎</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;