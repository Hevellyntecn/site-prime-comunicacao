'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  
  // Adicione esta lista de projetos aqui
  const [selectedItem, setSelectedItem] = useState(null);
const portfolioItems = [
    {
      type: 'image', // Identifica que é uma imagem
      src: '/Feed Mamur Oriental 30-6-2025.png', // Caminho para a imagem na pasta public
      category: 'SOCIAL MEDIA',
      client: 'Mamur Oriental',
    },
    {
      type: 'image',
      src: '/Feed Mamur Oriental 04-06-2025.png', // Use os nomes que você deu aos arquivos
      category: 'CAMPANHA',
      client: 'Campel Distribuidora',
    },
    {
      type: 'video', // Identifica que é um vídeo
      src: '/0716.mp4', // Você precisaria colocar um vídeo na pasta
      thumbnail: '/0716.mp4', // E uma imagem de capa para ele
      category: 'VÍDEO',
      client: 'Sorridente',
      className: 'w-auto max-h[75vh] rounded-lg',
    },
  ];


  return (
    <main>
      {/* Seção sobre Hero*/}
      <section className='min-h-screen w-full flex flex-col items-center justify-center text-center p-4 '>
        <div className='container mx-auto'>

          <h1 className='font-serif text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent'>Comunicação que Conecta <br />Resultados que Impressionam</h1>

          <p className='mt-6 max-w-2xl mx-auto font-sans text-lg font-light text-gray-300'> 
            Na Prime Comunicação, transformamos ideias em estratégias de comunicação eficazes <br />
            Nossa missão é conectar marcas ao seu público-alvo através de soluções personalizadas e inovadoras
          </p>

          <div className='mt-10'>
            <Link href='/contato' className='font-sans text-sm font-semibold inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300'> Saiba Mais
            <ArrowRight size={16}/>
            </Link>

          </div>

        </div>
      </section>
      {/* As próximas seções do site irá vir aqui */}
      {/* Sobre nós */}
      <section id='sobre' className='w-full bg-black py-20 md:py-28'>
        <div className='container mx-auto px-4'>
        </div>

        {/* Coluna de texto (direita) */}
        <div className='max-w-3xl mx-auto text-center'>
  <h2 className='font-serif text-3xl md:text-4xl font-bold mt-2'>
    Especialistas em Criar Conexões Duradouras
  </h2>
  <p className='font-sans text-base text-gray-300 mt-4 leading-relaxed'>
    Na Prime Comunicação, não apenas criamos campanhas; construímos pontes entre sua marca e seu público. Nossa paixão é transformar desafios em oportunidades e ideias em realidade, sempre com um olhar afiado para o design, estratégia e inovação.
  </p>

  {/* Lista de pontos fortes - agora também centralizada */}
  <div className='mt-8 inline-flex flex-col gap-4 text-left'>
    <div className='flex items-start gap-3'>
      <span className='text-white mt-1'>✔</span>
      <div>
        <h3 className='font-sans font-semibold'>Estratégia e Precisão</h3>
        <p className='font-sans text-sm text-gray-400'>Analisamos dados para criar estratégias que atingem o público certo na hora certa.</p>
      </div>
    </div>
    <div className='flex items-start gap-3'>
      <span className='text-white mt-1'>✔</span>
      <div>
        <h3 className='font-sans font-semibold'>Criatividade sem Limites</h3>
        <p className='font-sans text-sm text-gray-400'>Nossa equipe criativa está sempre pronta para inovar e surpreender.</p>
      </div>
    </div>
  </div>
</div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="w-full py-20 md:py-28 bg-[#111111]">
        <div className="container mx-auto px-4">
          
          {/* Título da Seção */}
          <div className="text-center max-w-2xl mx-auto mb-12 ">
            <span className="font-sans text-sm font-semibold text-gray-400 tracking-wider">NOSSAS SOLUÇÕES</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              Serviços Criados para Impulsionar sua Marca
            </h2>
          </div>

          {/* Grid com os Cards de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Branding */}
            <div className="bg-gray-900 p-8 rounded-lg border border-transparent hover:border-gray-700 transition-colors duration-300">
              <h3 className="font-sans text-xl font-bold">Branding e Identidade Visual</h3>
              <p className="font-sans text-gray-400 mt-2">
                Criamos marcas memoráveis, desde o logo até o manual da marca, garantindo uma presença forte e coerente no mercado.
              </p>
            </div>

            {/* Card 2: Marketing Digital */}
            <div className="bg-gray-900 p-8 rounded-lg border border-transparent hover:border-gray-700 transition-colors duration-300">
              <h3 className="font-sans text-xl font-bold">Marketing Digital</h3>
              <p className="font-sans text-gray-400 mt-2">
                Planejamos e executamos campanhas de marketing digital focadas em performance, SEO e engajamento para atrair e converter clientes.
              </p>
            </div>

            {/* Card 3: Redes Sociais */}
            <div className="bg-gray-900 p-8 rounded-lg border border-transparent hover:border-gray-700 transition-colors duration-300">
              <h3 className="font-sans text-xl font-bold">Gestão de Redes Sociais</h3>
              <p className="font-sans text-gray-400 mt-2">
                Produzimos conteúdo relevante e gerenciamos suas redes sociais para construir uma comunidade fiel e engajada em torno da sua marca.
              </p>
            </div>
            
            {/*  Espaço para adicionar mais card se necessário */}

          </div>
        </div>
      </section>
       {/* Seção de Cases de Sucesso */}
      <section id="cases" className="w-full py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          
          {/* Título da Seção */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-sm font-semibold text-gray-400 tracking-wider">PORTFÓLIO</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              Trabalhos que Falam por Nós
            </h2>
          </div>

          {/* Grid com os Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Usamos .map() para criar um card para cada item do nosso array */}
            {portfolioItems.map((item, index) => (
            <div 
             key={index} 
             className='group relative overflow-hidden rounded-lg shadow-xl cursor-pointer'
             onClick={() => setSelectedItem(item)}
            >
            <img
            // Use a imagem de capa se for um vídeo, senão a imagem principal
            src={item.type === 'video' ? item.thumbnail : item.src}
            alt={`Projeto: ${item.title}`}
            className='w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110'
            />
                {/* Overlay com gradiente para garantir a legibilidade do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Conteúdo de texto sobre a imagem */}
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-sans text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Seção de Contato (CTA) */}
      <section id='contato' className='w-full py-20 md:py-32 bg-gray-900'>
        <div className='container mx-auto px-4'>

          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='font-serif text-3xl md:text-4xl font-bold'>
              Vamos Trabalhar Juntos?
            </h2>
            <p className='font-sans text-gray-300 mt-4'>
              Adoraríamos ouvir sobre seu projeto. Entre em contato para agendarmos uma conversa e descobrirmos como podemos ajudar sua marca a crescer.
            </p>
            <div className='mt-8'>
              <a 
                href='https://wa.me/5565981703400?text=Olá!%20Vi%20o%20site%20da%20Prime%20e%20gostaria%20de%20mais%20informações.'
                target='_blank' // Abre em uma nova aba
                rel='noopener noreferrer' // Boas práticas de segurança
                className='font-sans text-sm font-semibold inline-flex items-center gap-3 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors duration-300'
              >
              <FaWhatsapp size={20} />
              Falar Pelo WhatsApp
            </a>
            </div>
            {/* ============================================== */}
        </div>
        </div>
      </section>
  {selectedItem && (
    <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4' onClick={() => setSelectedItem(null)}>
      <div className='relative bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto' onClick={(e) => e.stopPropagation()}>
        {/* Botão de Fechar */}
        <button 
          onClick={() => setSelectedItem(null)} 
          className='absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 z-10'
        >
          <X size={24} />
        </button>

        {/* Conteúdo do Modal */}
        {selectedItem.type === 'video' ? (
          <video src={selectedItem.src} controls autoPlay className='w-full h-full rounded-lg'></video>
        ) : (
          <img src={selectedItem.src} alt={selectedItem.title} className='w-full h-full object-contain rounded-lg'/>
        )}
      </div>
    </div>
  )}

    </main>
  )
}