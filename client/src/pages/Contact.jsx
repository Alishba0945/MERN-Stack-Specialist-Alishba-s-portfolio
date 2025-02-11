import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5dbda2aa-e6d1-4eb6-aa81-1bc41742897b");

    const object = Object.fromEntries(formData); // Move before JSON conversion
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully!");
      console.log("Success", res);
      setContact({ username: "", email: "", message: "" }); // Clear form after success
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>

        <div className="container grid grid-two-cols">
          {/* Contact form */}
          <img
            className="contact-img"
            src="images/Contact.webp"
            alt="I am always ready to help you."
            height="600"
          />
          <section className="section-form">
            <div className="distance">
              <form onSubmit={onSubmit}>
                <label htmlFor="username">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  id="username"
                  required
                />

                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />

                <label htmlFor="message">Write your message here:</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  rows="8"
                  required
                ></textarea>

                <button type="submit" className="contact-submit">
                  Submit now
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
