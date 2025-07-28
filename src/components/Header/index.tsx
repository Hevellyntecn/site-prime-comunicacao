import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cases de Sucesso', href: '#cases' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/">
            <Image
              src="/Logo Prime Branca.png" // O caminho para o logo na pasta public
              alt="Logo da Prime Comunicação"
              width={128} // Largura da imagem em pixels
              height={30} // Altura da imagem em pixels
              className="h-20 w-25" // Mantém a proporção da imagem
            />
        </Link>

        {/* Navegação */}
        <nav>
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-sans text-sm font-light text-white-300 hover:text-white transition-colors">
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}