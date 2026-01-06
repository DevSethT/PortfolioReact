import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__card">
        <h1 className="about__title">About Me</h1>

        <p className="about__intro">
          Hey, I’m Seth <span aria-hidden="true">👋</span>
        </p>

        <div className="about__content">
          <p>
            I’m a software engineering student and aspiring full-stack developer
            who enjoys building clean, user-friendly web applications and
            learning by doing. I’m most motivated when I’m working on real
            projects—taking an idea from concept to something people can
            actually use.
          </p>

          <p>
            I’m currently studying software engineering through{" "}
            <strong>TripleTen’s Software Engineering bootcamp</strong>, where
            I’m sharpening my skills in modern web development and building
            real-world projects. I enjoy the challenge of problem-solving and
            the constant opportunity to learn something new with every feature I
            build or bug I fix.
          </p>

          <p>
            Right now, I work primarily with HTML, CSS, JavaScript, and React,
            and I’m actively growing toward full-stack development. I care about
            writing readable, maintainable code and creating interfaces that
            feel intuitive rather than overcomplicated.
          </p>

          <p>
            Outside of coding, I have a life I care about just as much. I spend
            a lot of time with my girlfriend, who’s been incredibly supportive
            while I balance work, school, and projects. I also have a dog named{" "}
            <strong>Bruno</strong>, who makes sure I take breaks, go outside,
            and don’t sit at my desk all day 🐶.
          </p>

          <p>
            I’m into gaming and anime, which has influenced how I think about
            progression, systems, and user experience. I enjoy building things
            that feel engaging and rewarding to use—whether that’s a game
            mechanic or a web app.
          </p>

          <p>
            My goal is to grow into a well-rounded full-stack developer,
            contribute to meaningful products, and keep improving one project at
            a time. If you’d like to connect, collaborate, or just talk tech,
            feel free to reach out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
