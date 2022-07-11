import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Float, Demo } from "@/components/banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FloQast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full items-center justify-center">
        <div className="relative h-[695px] max-w-[1400px] w-full py-10">
          <img
            className="absolute inset-0 w-full h-full object-none"
            src="/static/images/smiling-man.jpg"
            alt="Smiling man"
          />
          <Float />
          <div className="flex relative max-w-5xl h-full mx-auto px-8 lg:px-0">
            <Demo />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
