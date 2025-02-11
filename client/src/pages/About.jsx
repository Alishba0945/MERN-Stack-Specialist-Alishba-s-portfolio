import "./About.css";

const About = () => {
  return (
    <>
      <section className="About me">
        <div className="about-inform">
          <div className="about-heading">About me</div>
          <div className="container grid grid-two-cols">
            <div className="adding">
              <div className="p">
                <div>
                  <li>
                    <span> Alishba Shahzad Specialization:</span>
                  </li>
                  <h5>
                    Full Stack Development with MERN Stack (MongoDB, Express.js,
                    React.js, Node.js).
                  </h5>
                </div>
                <div>
                  <li>
                    <span>Expertise:</span>
                  </li>
                  <h5>
                    Building responsive and user-friendly websites. Developing
                    scalable backend systems. Integrating frontend and backend
                    for seamless web applications.
                  </h5>
                </div>
                <div>
                  <li>
                    <span>Skills:</span>
                  </li>
                  <h5>
                    Proficient in frontend technologies like HTML, CSS,
                    JavaScript, and React.js. Experienced in backend frameworks
                    like Node.js and Express.js. Basic knowledge of database
                    management using MongoDB.
                  </h5>
                </div>
                <div>
                  <li>
                    <span> Learning Goals:</span>
                  </li>
                  <h5>
                    Continuously improving my skills and exploring the latest
                    web technologies.
                  </h5>
                </div>
                <div>
                  <li>
                    <span>Passion:</span>
                  </li>
                  <h5>Turning ideas into interactive digital experiences.</h5>
                </div>
              </div>
              <div className="hero-action">
                <a href="/contact">
                  <div className="hero-contact">Contact with me</div>
                </a>
                <a href="/services">
                  <div className="hero-resume">My Services</div>
                </a>
              </div>

              <h2 className="title5">Connections & Professional Links</h2>
              <div className="inform">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/alishba-shehzad-3212aa328/"
                      target="_blank"
                    >
                      Connect with me on my LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freelancer.com/u/sheikhs47"
                      target="_blank"
                    >
                      Explore my Freelancer profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Alishbasheikh0098/-Alishba-has-built-her-own-portfolio-using-React.js.-.git"
                      target="_blank"
                    >
                      Check out my GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
