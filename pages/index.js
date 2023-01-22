import Head from "next/head";
// import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Display from "../components/Display";
import About from "../components/About";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakir Ashker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dotASH-dark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <Script></Script>
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* Home */}
      <Display />
      {/* About */}
      <About></About>
      {/* </div> */}
    </>
  );
}
