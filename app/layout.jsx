import { Montserrat } from "next/font/google";
import Head from 'next/head'; // Import the Head component
import "./globals.css";
import { Providers } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Infinity AntiCheat",
  description: "The only AntiCheat you'll ever need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta content="Infinity AntiCheat" property="og:title" />
        <meta content='"The only anticheat you will ever need". The official website for Infinity AntiCheat, an advanced and affordable FiveM AntiCheat." property="og:description' />
        <meta content="https://discord.gg/qcrAYCFUFE" property="og:url" />
        <meta content="https://media.discordapp.net/attachments/1224474178304868472/1228760238006730812/image.png?ex=665dfea6&is=665cad26&hm=23ae310eca19d1258e21a044ab140a11613baaded320d49d0d0a72e66243f8d7&=&format=webp&quality=lossless" property="og:image" />
        <meta content="#C4B5FD" data-react-helmet="true" name="theme-color" />
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
