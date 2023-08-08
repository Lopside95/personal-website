import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import cvPicture from "./cvPicture.jpg";
import heroAppVid from "./heroAppVid.mp4";
import picOpt2 from "./picOpt2.jpg";
import monkeylandImg from "./monkeyland-pic.jpg";
import shortStories from "./shortStories.jpeg";
import reactLogoSmall from "./react-logo-small.png";
import dronesImg from "./drones.png";
import dronesText from "./drones-writing.png";
import "./App.css";

function App() {
  const skillsRef = useRef(null);
  const mainRef = useRef(null);

  const [dronesWriting, setDronesWriting] = useState(false);

  const handleDronesClick = () => {
    setDronesWriting(!dronesWriting);
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="linkedin-and-git">
          <h2
            className="jw"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            JW
          </h2>

          <h5 className="linkedin">
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/james-wallington-2a122bb6/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h5>
          <h5 className="github">
            <a
              className="github-link"
              href="https://github.com/Lopside95"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </h5>
          <h6
            className="skills-nav"
            onClick={() => {
              skillsRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </h6>
          <h6
            className="projects-nav"
            onClick={() => {
              mainRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </h6>
        </div>
      </div>
      <header className="header">
        <p className="header-text">
          My feelings toward long walks on the beach are varied and
          inconclusive.
          <br /> It’s been several years since I watched a horror film and I
          don't like olives.
        </p>
        <h4 className="like-coding">But I like coding and writing</h4>
        <img className="prof-pic" src={picOpt2} alt="" />
        <p className="bio">
          I’m a frontend developer and copywriter. I’ve freelanced in
          copywriting and strategy for the better part of four years, have a
          certificate in user-centred design and I love building things – be
          they apps, campaigns or stories. I grew up in a small, coastal South
          African town and last year moved to Switzerland.
        </p>
      </header>
      <main className="main">
        <section className="dev-projects" ref={mainRef}>
          <h2 className="frontend-heading">Frontend Development</h2>
          <article className="hero-app">
            <h3 className="hero-app-heading">Hero Builder</h3>

            <video controls className="hero-app-vid">
              <source src={heroAppVid} type="video/mp4" />
              Video tag not supported by browser
            </video>
            <p className="hero-app-text">
              This project allows users to create a hero through form selections
              and text inputs. Options synergise differently and final values,
              such as health, are calculated using a number of variables. Heroes
              are submitted and saved to a team. The deployed {""}
              <a
                className="hero-app-link"
                href="https://lopside95.github.io/create-hero/"
                target="_blank"
                rel="noreferrer"
              >
                Hero Builder {""}
              </a>
              {""} is available here. My Github project repositories are
              available {""}
              <a
                className="app-text-github-link"
                href="https://github.com/Lopside95"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a>
            </p>
          </article>
        </section>

        {/* Beginning of Writing and Strategy */}

        <section className="writing-and-strategy">
          <article className="writing-intro">
            <h2 className="writing-heading">Strategy & Copywriting</h2>
            <p className="writing-text">
              As a creative and perceptive person with an appreciation for
              well-developed concepts, as well as the finer details of writing,
              I write insightful work that remains true to an overarching
              narrative, however loosely defined or informal that narrative may
              be. This is important because no story exists in isolation – they
              rely on past stories, needing to understand and engage with them
              in order to be effective as they act in concert with the
              narratives around them. Storytelling is one of my strengths I
              value most and as a copywriter it is an invaluable tool.
            </p>
          </article>
          <article className="drones-project">
            <h4 className="drones-project-heading">
              DSV - Towards Zero & more
            </h4>
            <img
              className="drones-project-imgs"
              src={dronesWriting ? dronesText : dronesImg}
              alt=""
              onClick={handleDronesClick}
            />
            <p className="drones-project-text">
              As one of the top global transport and logistics companies, much
              of the work I’ve done for DSV, through Serious Moonlight
              Consulting, focusses on technology and innovation. This ad
              showcases their use of drones as they progress towards ‘zero-error
              warehousing’. Other work I’ve done for DSV includes transcribing
              and editing these{" "}
              <a
                href="https://www.dsv.com/en-za/careers/employee-testimonials"
                target="_blank"
                rel="noreferrer"
              >
                employee testimonials
              </a>
              .
            </p>
          </article>

          <article className="monkeyland">
            <h4 className="monkeyland-heading">
              Copy editing for Monkeyland Primate Sanctuary
            </h4>
            <img className="monkeyland-img" src={monkeylandImg} alt="" />

            <p className="monkeyland-text">
              Monkeyland is a free-roaming primate sanctuary in South Africa. It
              covers a 12-hectare section of forest in which primates rescued
              from labs, zoos, and households into which they were unwisely
              taken as pets and subsequently surrendered, are given new lives.
              Edited bodies of text include
              <a
                className="nutshell"
                href="https://www.monkeyland.co.za/page/monkeyland-in-a-nutshell"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {""}
                Monkeyland In A Nutshell
              </a>
              {""} and {""}
              <a
                className="vision"
                href="https://www.monkeyland.co.za/page/our-vision"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Our Vision
              </a>
              .
            </p>
          </article>
          <article className="stories-project">
            <h4 className="stories-project-heading">
              There's Always Time For a Short Story
            </h4>
            <img className="stories-project-img" src={shortStories} alt="" />
            <p className="stories-project-text">
              This Red & Yellow project charged us with developing a promotional
              event for Exclusive Books. People often wish that they read more
              and one of the common issues faced is a shortage of time. We
              realised short stories – in truth these are vignettes – can be
              read quickly and in any setting. During the promotion, stories
              were placed around the mall - on receipts, in elevators, and on
              limited edition packets.
            </p>
          </article>
        </section>

        <section className="about" ref={skillsRef}>
          <article className="tech">
            <h3 className="tech-heading">Technologies</h3>
            <ul className="tech-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
            </ul>
          </article>
          <article className="skills">
            <h3 className="skills-heading">Skills</h3>
            <ul className="skills-list">
              <li>Strategy</li>
              <li>Concept development</li>
              <li>Public-facing communication</li>
              <li>Intra-business communication</li>
              <li>Information architecture</li>
            </ul>
          </article>
          <article className="experience">
            <h3 className="exp-heading">Experience</h3>
            <ul className="exp-list">
              <li>
                Consultant, Copywriter | Serious Moonlight Consulting <br />
                January 2020 - present
              </li>
              <li>
                Copy Editor | Monkeyland Primate Sanctuary <br /> August 2020
              </li>
              <li>
                Tour Guide | Monkeyland Primate Sanctuary <br />
                January - April 2019
              </li>
            </ul>
          </article>
          <article className="education">
            <h3 className="edu-heading">Education</h3>
            <ul className="edu-list">
              <li>Learn React with Bob Ziroll | Scrimba</li>
              <li>The Complete Front-End Web Development Course | Udemy </li>
              <li>
                National Certificate in Design Techniques – User-centred Design
                | Red & Yellow Creative School of Business
              </li>
              <li>
                Struik PRH Creative Writing online short course | Penguin Random
                House South Africa
              </li>
              <li>
                Diploma in Copywriting | Red & Yellow Creative School of
                Business
              </li>
            </ul>
          </article>
        </section>
      </main>
      <footer className="footer">
        <p>+41 76 570 1553</p>
        <p>james.p.wallington@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
