import Image from "next/image";
import Navbar from "components/Navbar";
import "../../app/globals.css";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <div className="container">
          <div className="text-5xl pb-7 font-semibold ">
            Why we built Esai
          </div>
          <br/>
          <div className="text-lg">
            We wanted to solve one of the biggest challenges in today's medical
            industry...
          </div>
          <div className="text-2xl pt-11 font-semibold">Our Team</div>
          <div className="text-lg">
            Bian Lee, Computer Science and Engineering, '26
            <br />
            Keenan Kalra, Computer Science and Engineering, '26
            <br />
            Andrew Kuang, Data Science, '26
            <br />
            Ritvik Irigireddy, Psychology, '24
          </div>
          <div className="text-2xl pt-11 font-semibold">Technologies</div>
          <div className="text-lg">
            We used the following tech stack to build Esai
          </div>
        </div>
      </main>
    </div>
  );
}
