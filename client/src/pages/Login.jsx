import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5002/api/auth/user";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //for visible above usenavigate
  const navigate = useNavigate();

  const [error, setError] = useState(null); // Store error message
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle input change
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); // Check the values of the user object
    alert("Email sent Successfully!");

    try {
      // Use fetch to send the request
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // Check if the response status is OK
      if (response.ok) {
        alert("Login successful");
        setUser({ email: "", password: "" });
        navigate("/"); // Navigate to the home page after successful login
      } else {
        // Handle invalid credentials error
        const data = await response.json();
        setError(data.message || "Invalid credentials"); // Display error message if any
      }
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <>
      <section className="register">
        <main>
          <div className="register-section">
            <h1 className="main-h1heading mb-3">Login Form</h1>
            <br />
            <div className="container-of-register">
              <form onSubmit={handleSubmit}>
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

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="register-submit">
                  Login now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
