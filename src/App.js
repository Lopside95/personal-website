import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
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
      <header className="header">
        <p className="header-text">
          My feelings toward long walks on the beach are varied and
          inconclusive.
          <br /> It’s been several years since I ate an olive and I don’t like
          horror movies.
        </p>
        <h4 className="like-coding">But I do like coding</h4>
        <img className="prof-pic" src="./cv-picture.jpg" alt="" />
        <p className="bio">
          I’m James, a frontend developer with a background in copywriting and
          UX design. I’ve worked as a strategist and copywriter and have a
          certificate in user-centred design, where my strength is in
          information architecture. Over time I’ve come to realise that my
          future lies in coding and last I year I began my journey into frontend
          development.
        </p>
      </header>
      <main className="main">
        <section className="projects">
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
              {""} is available here. It and other project repositories are
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
              <source src="./hero-app-vid.mp4" type="video/mp4" />
              Video tag not supported by browser
            </video>
          </article>
        </section>

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
              <li>Learn React for Free | Scrimba</li>
              <li>The Complete Front-End Web Development Course | Udemy </li>
              <li>Front End Web Developer Nanodegree | Udacity</li>
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
