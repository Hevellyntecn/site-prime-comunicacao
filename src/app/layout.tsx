import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

// Importe nosso novo componente
import { Header } from "@/components/Header";

// ... (o código das fontes permanece o mesmo) ...
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Prime Comunicação - Estratégias que Conectam",
  description: "Agência de comunicação especializada em marketing digital, branding e criação de conteúdo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        {/* Adicionamos o Header aqui */}
        <Header />

        {/* O conteúdo da página será renderizado abaixo do header */}
        {children}
      </body>
    </html>
  );
}