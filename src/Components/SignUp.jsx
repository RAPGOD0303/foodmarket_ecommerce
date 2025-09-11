import { useState } from "react";
import axios from "axios";
import "../CSS/Signup.css";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loadingAnimation from '../animation/Loading-3dots.lottie';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

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
        // if (res.data.user) {
        //   dispatch(setUser(res.data.user));
        //   localStorage.setItem("user", JSON.stringify(res.data.user));
        // }
        dispatch(setUser(res.data.user)); // ✅ update Redux
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("isLoggedIn", "true");
        setIsSignUp(false);
        
      } else {
        const res = await api.post("/signin", {
          usernameOrEmail: formData.usernameOrEmail,
          password: formData.password,
        });
        setMessage(res.data.message);
        console.log("Logged in user:", res.data.user);
        // save user both in redux and localStorage
        dispatch(setUser(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
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

  // Object mapping of field validators
// Object mapping: fieldName → validation function
const validators = {
  firstname: (value) => {
    if (!value.trim()) return "First name is required";
    if (value.length < 3) return "First name must be at least 3 characters";
    if (value.length > 15) return "First name cannot exceed 15 characters";
    return "";
  },
  lastname: (value) => {
    if (!value.trim()) return "Last name is required";
    if (value.length < 3) return "Last name must be at least 3 characters";
    if (value.length > 15) return "Last name cannot exceed 15 characters";
    return "";
  },
  username: (value) => {
    if (!value.trim()) return "Username is required";
    if (!/^[a-zA-Z0-9_]+$/.test(value)) return "Username can only contain letters, numbers, and underscores";
    if (value.length < 4) return "Username must be at least 4 characters";
    return "";
  },
  password: (value) => {
    if (!value.trim()) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
    if (!/[0-9]/.test(value)) return "Password must contain at least one number";
    if (!/[!@#$%^&*]/.test(value)) return "Password must contain at least one special character (!@#$%^&*)";
    return "";
  },
  email: (value) => {
    if (!value.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
    return "";
  },
  mobile: (value) => {
    if (!value.trim()) return "Mobile number is required";
    if (!/^[0-9]{10}$/.test(value)) return "Mobile number must be 10 digits";
    return "";
  },
};

const [errors, setErrors] = useState({});

// Validation function
const validateField = (name, value) => {
  const validator = validators[name];
  return validator ? validator(value) : "";
};

function handleBlur(e) {
  const { name, value } = e.target;
  const error = validateField(name, value);
  setErrors((prev) => ({ ...prev, [name]: error }));
}

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
  {/* First Name */}
  <div className="d-flex flex-column">
    <input
      name="firstname"
      value={formData.firstname}
      onChange={handleChange}
      placeholder="First Name"
      onBlur={handleBlur}
      maxLength={15}
      minLength={3}
      required
      id="firstname"
      className={errors.firstname ? "error-border" : ""}
    />
    {errors.firstname && <span className="error-text">{errors.firstname}</span>}
  </div>

  {/* Last Name */}
  <div className="d-flex flex-column">
    <input
      name="lastname"
      value={formData.lastname}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Last Name"
      className={errors.lastname ? "error-border" : ""}
    />
    {errors.lastname && <span className="error-text">{errors.lastname}</span>}
  </div>

  {/* Username */}
  <div className="d-flex flex-column">
    <input
      name="username"
      value={formData.username}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Username"
      className={errors.username ? "error-border" : ""}
    />
    {errors.username && <span className="error-text">{errors.username}</span>}
  </div>

  {/* Password */}
  <div className="d-flex flex-column" style={{ position: "relative", width: "100%" }}>
    <input
      name="password"
      value={formData.password}
      onChange={handleChange}
      onBlur={handleBlur}
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className={errors.password ? "error-border" : ""}
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
    {errors.password && <span className="error-text">{errors.password}</span>}
  </div>

  {/* Email */}
  <div className="d-flex flex-column">
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      onBlur={handleBlur}
      type="email"
      placeholder="Email"
      className={errors.email ? "error-border" : ""}
    />
    {errors.email && <span className="error-text">{errors.email}</span>}
  </div>

  {/* Mobile */}
  <div className="d-flex flex-column">
    <input
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      onBlur={handleBlur}
      type="tel"
      placeholder="Mobile Number"
      className={errors.mobile ? "error-border" : ""}
    />
    {errors.mobile && <span className="error-text">{errors.mobile}</span>}
  </div>

  {/* Submit + Toggle */}
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
                    {message && <p className="mt-3">{message}</p>}
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

          
        </div>
      </div>
    </div>
  );
}

export default SignUp;