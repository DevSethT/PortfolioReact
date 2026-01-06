// src/components/Contact/Contact.jsx
import "./Contact.css";

export default function Contact() {
  const email = "taylorseth59@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/seth-taylor-5a766018a";
  const github = "https://github.com/DevSethT";

  const subject = encodeURIComponent("Portfolio — Let's connect");
  const body = encodeURIComponent(
    `Hey Seth,\n\nI found your portfolio and wanted to reach out about...\n\n— Name:\n— Company/Project:\n— Best way to follow up:\n`
  );

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__container">
        <header className="contact__header">
          <h2 className="contact__title" id="contact-title">
            Contact
          </h2>

          <p className="contact__subtitle">
            I’m Seth Taylor — a software engineering student (TripleTen) working toward a full-stack
            role. I’m open to internships, junior roles, freelance work, and collaborations.
          </p>

          <ul className="contact__meta" aria-label="Contact details">
            <li className="contact__metaItem">
              <span className="contact__metaLabel">Location:</span>{" "}
              <span className="contact__metaValue">Vidor, TX • Open to remote</span>
            </li>
            <li className="contact__metaItem">
              <span className="contact__metaLabel">Response time:</span>{" "}
              <span className="contact__metaValue">Usually within 24–48 hours</span>
            </li>
          </ul>
        </header>

        <div className="contact__cards" role="list">
          <article className="contact__card" role="listitem">
            <h3 className="contact__cardTitle">Email</h3>
            <p className="contact__cardText">
              Best for opportunities, questions, or collabs.
            </p>
            <a
              className="contact__button"
              href={`mailto:${email}?subject=${subject}&body=${body}`}
            >
              {email}
            </a>
          </article>

          <article className="contact__card" role="listitem">
            <h3 className="contact__cardTitle">LinkedIn</h3>
            <p className="contact__cardText">
              Let’s connect — I post progress and projects.
            </p>
            <a
              className="contact__button contact__button--secondary"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </article>

          <article className="contact__card" role="listitem">
            <h3 className="contact__cardTitle">GitHub</h3>
            <p className="contact__cardText">
              Code, commits, and projects live here.
            </p>
            <a
              className="contact__button contact__button--secondary"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </article>
        </div>

        <div className="contact__footer">
          <p className="contact__footerText">
            Prefer a quick message? Email is fastest — include what you’re reaching out about and
            the best way to follow up.
          </p>

          {/* Optional: add a resume link when you have it */}
          {/* <a className="contact__resumeLink" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}
