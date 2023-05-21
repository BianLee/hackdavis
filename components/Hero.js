import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        {/*
        <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
        >
          Clone and deploy your own with{" "}
          <span className="text-blue-600">Vercel</span>
        </a>
         */}
        <h1
          className="mx-auto max-w-4xl font-display text-5xl tracking-normal text-white sm:text-7xl font-bold mt-10"
          style={{ lineHeight: "5.3rem" }}
        >
          Better diagnosis made possible using ML
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white text-white leading-7">
          Esai provides fast and reliable access to DSM5 powered by Large
          Language Model (LLM) and embedded vector search
        </h2>
        <div style={{ display: "inline", marginTop: "4rem" }}>
          <Link
            style={{ marginRight: "0.5rem" }}
            className="border-solid border-2 border-white rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
            href="/chatbot"
          >
            Use chatbot
          </Link>
          <Link
            className="border-solid border-2 border-white rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
            href="https://github.com/ritvikir/hackdavis"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            {/*
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
              </div>
            </div>
             */}
          </div>
        </div>
      </main>
    </>
  );
}
