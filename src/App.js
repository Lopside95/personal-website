import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import cvPicture from "./cvPicture.jpg";
import heroAppVid from "./heroAppVid.mp4";
import picOpt2 from "./picOpt2.jpg";
import monkeylandPic from "./monkeyland-pic.jpg";
import shortStories from "./shortStories.jpeg";
import "./App.css";

function App() {
  const [storyInfo, setStoryInfo] = useState(false);

  function toggleStory() {
    setStoryInfo((prevStoryInfo) => !prevStoryInfo);
  }

  const [hovered, setHovered] = useState(false);

  const hoverStyle = {
    boxShadow: hovered ? "0 0 1px 1px #000" : "0 0 0 0 #FFF",
    // opacity: hovered ? 0.8 : 1,
  };

  const hoverMouseEnter = () => {
    setHovered(true);
  };

  const hoverMouseLeave = () => {
    setHovered(false);
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
        </div>
        <div className="dev-and-writer">
          <h6 className="dev-nav">Developer</h6>
          <h6 className="writer-nav">Copywriter</h6>
        </div>
      </div>
      <header className="header">
        <p className="header-text">
          My feelings toward long walks on the beach are varied and
          inconclusive.
          <br /> It’s been several years since I ate an olive and I don’t like
          horror movies.
        </p>
        <h4 className="like-coding">But I like coding and writing</h4>
        <img className="prof-pic" src={picOpt2} alt="" />
        <p className="bio">
          I’m a frontend developer and copywriter. I’ve worked as a strategist
          and have a certificate in user-centred design, where my strength is in
          information architecture.
        </p>
      </header>
      <main className="main">
        <section className="dev-projects">
          <h2 className="projects-heading">Projects</h2>
          <article className="hero-app">
            <h3 className="hero-app-heading">Hero Builder</h3>
            <p className="hero-app-desc">
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
            <video controls className="hero-app-vid">
              <source src={heroAppVid} type="video/mp4" />
              Video tag not supported by browser
            </video>
          </article>
        </section>

        {/* Beginning of Writing and Strategy */}

        <section className="writing-and-strategy">
          <article className="writing-intro">
            <h2 className="writing-heading">Strategy & Copywriting</h2>
            <p className="writing-desc">
              One of my strengths I value most is storytelling. No story exists
              in isolation – they rely on past stories, needing to understand
              and engage with them in order to be effectively communicated as
              they act in concert with the narratives around them. Strategy lays
              the foundation and is the driving force behind potent and
              insightful communication.
            </p>
          </article>
          <article className="stories-project">
            <h3 className="story-heading">
              There's Always Time For a Short Story
            </h3>
            <div
              className="story-text-img"
              onClick={toggleStory}
              onMouseEnter={hoverMouseEnter}
              onMouseLeave={hoverMouseLeave}
              style={hoverStyle}
            >
              {storyInfo ? (
                <p className="story-text">
                  The brief charged us with developing a promotional event for
                  Exclusive Books. People often wish that they read more and one
                  of the common issues faced is a shortage of time. We realised
                  short stories – in truth these are vignettes – can be read
                  quickly and in any setting. During the promotion, stories were
                  placed around the mall - on receipts, in elevators, and on
                  limited edition packets.
                </p>
              ) : (
                <img className="stories-img" src={shortStories} alt="" />
              )}
            </div>
          </article>
        </section>
        <article className="monkeyland">
          <h4>Copy editing for Monkeyland Primate Sanctuary</h4>
          <img className="monkeyland-pic" src={monkeylandPic} alt=""></img>
          <p className="monkeyland-links">
            Edited bodies of text on the Monkeyland website. These include
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

        <section className="about">
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
              <li>Information architecture</li>
              <li>Client-facing communication</li>
              <li>Intra-business communication</li>
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
                Copy Editor | Monkeyland Primate Sanctuary <br /> August -
                September 2020
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
