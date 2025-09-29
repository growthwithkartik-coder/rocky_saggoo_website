import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import AOSInit from "./component/aos/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rocky Saggoo Capital",
  description: "Real Estate & Business Growth Experts! Empowering founders & startups to DOMINATE!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" src="./favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-p3W7Zr4lbOkDHR5rqU17d5It9vO2wQNHjEYtxx0BpQU6zANv0AdPD4Y0WDb1zyK8BkjkZf9llsXfb1xjU43ktA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
           <AOSInit/>
                <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />

      </body>
    </html>
  );
}
