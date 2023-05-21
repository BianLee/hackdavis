import Image from "next/image";
import Navbar from "components/Navbar";
import "../../app/globals.css";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <div className="container">
          <div className="text-5xl pb-7 font-semibold ">Why we built Esai</div>
          <br />
          <div className="text-lg">
            One of the biggest barriers we recognized in today's medical field
            was getting access to mental health diagnosis and appropriate
            treatment, especially for those in underserved communities that lack
            proper resources. With growing emphasis on the importance of mental
            well-being in the recent years, Esai aims to help provide accurate
            diagnosis on every case-to-case situations, ensuring that the
            patients can further proceed in receiving help.
          </div>
          <div className="text-2xl pt-11 font-semibold">
            <br />
            Our Team
          </div>
          <div className="text-lg">
            <a
              href="https://bianlee.me"
              target="_blank"
              style={{ color: "blue" }}
            >
              Bian Lee
            </a>
            , Computer Science and Engineering, '26
            <br />
            <a
              href="https://kklike32.github.io/portfolio/"
              target="_blank"
              style={{ color: "blue" }}
            >
              Keenan Kalra
            </a>
            , Computer Science and Engineering, '26
            <br />
            <a
              href="https://kuangster.co/"
              target="_blank"
              style={{ color: "blue" }}
            >
              Andrew Kuang
            </a>
            , Data Science, '26
            <br />
            <a
              href="https://www.ritvikir.co/"
              target="_blank"
              style={{ color: "blue" }}
            >
              Ritvik Irigireddy
            </a>
            , Psychology, '24
          </div>
          <div className="text-2xl pt-11 font-semibold">
            <br />
            Technologies
          </div>
          <div className="text-lg">
            Esai uses OpenAI's embedding engines, GPT-3.5 Turbo, Pinecone, and
            Langchain, built on Next.js.
          </div>
        </div>
      </main>
    </div>
  );
}
