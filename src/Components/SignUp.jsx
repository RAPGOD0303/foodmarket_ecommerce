import { useState } from "react";
import axios from "axios";
import "../CSS/Signup.css";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loadingAnimation from '../animation/Loading-3dots.lottie';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    usernameOrEmail: "",
  });
const handlePassword = () => {
  setShowPassword(prev => prev ? false : true);
};
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:5000/api/auth", // <-- match server prefix
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      if (isSignUp) {
        const res = await api.post("/signup", {
          firstname: formData.firstname,
          lastname: formData.lastname,
          username: formData.username,
          password: formData.password,
          email: formData.email,
          mobile: formData.mobile,
        });
        setMessage(res.data.message);
        setIsSignUp(false);
      } else {
        const res = await api.post("/signin", {
          usernameOrEmail: formData.usernameOrEmail,
          password: formData.password,
        });
        setMessage(res.data.message);
        console.log("Logged in user:", res.data.user);
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(() => {
          setLoading(false);
          Navigate("/home");
        }, 2000);
      }
    } catch (err) {
      console.log("AXIOS ERROR:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setMessage(
        err.response?.data?.error ||
          (err.response
            ? `Error ${err.response.status}`
            : "Cannot reach server")
      );
      setLoading(false);
    } finally {
      if (isSignUp) {
        // keep loader for signup artificially for 2 sec
        setTimeout(() => setLoading(false), 2000);
      }
    }
  };

  return (
    <div className="Signup">
      <div className="signup-main">
        <div className="signup-image w-50 d-flex justify-content-center">
          <img src="../images/phone.png" alt="Auth" />
        </div>

        <div className="signup-form">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              {/* Lottie loader */}
              <DotLottieReact
                src={loadingAnimation} // <-- replace with your file path
                loop
                autoplay
                style={{ width: 150, height: 150 }}
              />
            </div>
          ) : isSignUp ? (
            <>
              <h4 className="mb-3">
                Sign Up!{" "}
                <span>
                  So you don't miss out on great deals <br /> & discounts.
                </span>
              </h4>
              <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                />
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    style={{ paddingRight: "36px" }} // Add space for the icon
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      size={22}
                      color="gray"
                      style={{
                        position: "absolute",
                        right: "50%",
                        top: "45%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={handlePassword}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      color="gray"
                      style={{
                        position: "absolute",
                        right: "50%",
                        top: "45%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={handlePassword}
                    />
                  )}
                </div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                />
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Mobile Number"
                />

                <div className="signup-btn mt-4 d-flex flex-column">
                  <button type="submit" className="submit-btn mb-2">
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{" "}
                    <a
                      className="toggle-link"
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <h4 className="mb-3">Welcome Back! Please Sign In</h4>
              <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <input
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  placeholder="Username or Email"
                />
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    style={{ paddingRight: "36px" }} // Add space for the icon
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      size={25}
                      color="gray"
                      style={{
                        position: "absolute",
                        right: "50%",
                        top: "45%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={handlePassword}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={25}
                      color="gray"
                      style={{
                        position: "absolute",
                        right: "50%",
                        top: "45%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={handlePassword}
                    />
                  )}
                </div>

                <div className="signup-btn mt-4 d-flex flex-column">
                  <button type="submit" className="submit-btn mb-2">
                    Sign In
                  </button>
                  <p>
                    Don’t have an account?{" "}
                    <a
                      className="toggle-link"
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </>
          )}

          {message && <p className="mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
