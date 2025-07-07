import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header className={style.header}>
            <Link href="/">ONEBITE CINEMA</Link>
          </header>
          <main> {children}</main>
          <footer className={style.footer}>제작 @yongarframe</footer>
        </div>
      </body>
    </html>
  );
}
