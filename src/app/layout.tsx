import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Esta seria a descrição desta página",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <header><h1 style={{ fontSize: '0.8rem', backgroundColor: 'grey' }}>Header</h1></header>
        <div className="bg-red-500">{children}</div>
        <footer><h1 style={{ fontSize: '0.8rem', backgroundColor: 'grey' }}>Footer</h1></footer>
      </body>
    </html>
  );
}
