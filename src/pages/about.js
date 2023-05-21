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
            <br />
            <br />
            We were inspired by our interdisciplinary backgrounds in psychology,
            data science, computer science, and engineering. It's not easy to
            put labels on mental health issues, so we wanted to find a way to
            search for strong mental health resources without knowing the term
            first. Specifically, we were unimpressed with current searchable
            resources (webMD for example), so we wanted to find a reliable
            source. No source is more reliable than the{" "}
            <i>Diagnostic and Statistical Manual of Mental Disorders</i>, Fifth
            Edition, known as the DSM-5, the standard for psychiatrists and
            psychologists in helping aid mental health diagnoses.
          </div>
          <br />

          <br />
          <div class="content flex">
            <img
              className="w-3/6"
              src="team.jpg"
              alt=""
              style={{ width: "50%" }}
            />
            <div
              className="w-3/6 item-body"
              style={{
                paddingLeft: "2rem",
                paddingRight: "1.5rem",
                marginLeft: "1rem",

                backgroundColor: "#172554",
              }}
            >
              <br />
              <div className="text-2xl pt-11 font-semibold text-white">
                Our Team
              </div>

              <div className="text-lg text-white">
                <span></span>
                <a
                  href="https://bianlee.me"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  • Bian Lee
                </a>
                , Computer Science and Engineering, '26
                <br />
                <a
                  href="https://kklike32.github.io/portfolio/"
                  target="_blank"
                  style={{ color: "white", marginTop: "0.5rem" }}
                >
                  • Keenan Kalra
                </a>
                , Computer Science and Engineering, '26
                <br />
                <a
                  href="https://kuangster.co/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  • Andrew Kuang
                </a>
                , Data Science, '26
                <br />
                <a
                  href="https://www.ritvikir.co/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  • Ritvik Irigireddy
                </a>
                , Psychology, '24
              </div>
              <div className="w-1/6 text-2xl pt-11 font-semibold text-white">
                <br />
                <br />
                Technologies
              </div>
              <div className="text-lg text-white">
                Esai uses OpenAI's embedding engines, GPT-3.5 Turbo, Pinecone,
                and Langchain, built on Next.js + Typescript + MongoDB Atlas,
                and hosted serverless on Vercel. Beautifulsoup, Matplotlib,
                Jupyter were used for data scraping and analysis.
              </div>
            </div>
          </div>
        </div>
      </main>
      <br />
      <br />
    </div>
  );
}
