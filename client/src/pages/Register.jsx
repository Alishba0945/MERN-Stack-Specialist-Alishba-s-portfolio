import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  //for visible above usenavigate
  const navigate = useNavigate();

  // Handle input change
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Email sent Successfully!");
    console.log("User Data:", user);
    try {
      const response = await fetch("http://localhost:5002/api/auth/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      //status ok hone per hum data rase kerwana chatay han th we use this method befor console.log(response)
      if (response.ok) {
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section className="register">
        <main>
          <div className="register-section">
            <h1 className="main-h1heading mb-3">Registration Form</h1>
            <br />
            <div className="container-of-register">
              {/* Registration Form */}

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Your Phone no</label>
                  <input
                    type="number"
                    placeholder="Enter your phone no"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password">Your Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                    required
                  />
                </div>

                <button type="submit" className="register-submit">
                  Register now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
