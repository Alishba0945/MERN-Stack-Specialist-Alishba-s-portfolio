import "./Home.css";

const home = () => {
  return (
    <>
      <main>
        <section className="Section-hero">
          <img className="mern" src="images/ALISHBA SHAHZAD.png" height="400" />
          <div className="container">
            <div className="hero-content">
              <div className="signature-container">
                <span className="signature1">Welcome to Alishba's Website</span>
              </div>
              <div className="top">
                Hey, My name is Alishba Shahzad,
                <h4>
                  I am an Expert Full Stack Developer with specialization in the
                  MERN stack (MongoDB, Express.js, React.js, Node.js)
                </h4>
                I love building user-friendly interfaces with React and
                designing robust backend systems using Node.js, Express, and
                MongoDB. Feel free to explore my work and connect with me as a
                developer!
              </div>

              <div className="hero-action">
                <a href="/contact">
                  <div className="hero-contact">Contact with me</div>
                </a>
                <a href="https://alishbaprofessionalresume.netlify.app/3e44ded21  ">
                  <div className="hero-resume">My Resume</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default home;
