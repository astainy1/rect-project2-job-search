import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const redirector = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Function to submit login in details
  const submitLogInDetails = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required.");
      return redirector("/login");
    }
    if (!password) {
      toast.error("Password is required.");
      return redirector("/login");
    }
    console.log(email, password);
    toast.success("Login successfully.");
    return redirector("/");
  };

  return (
    <>
      <section className="bg-gray-40">
        <div className="container mx-auto  max-w-2xl py-20">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded m-4 md:m-0">
            <form onSubmit={submitLogInDetails}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Log In
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="custom-border rounded w-full py-2 px-3"
                  placeholder="Email Address"
                  s
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="custom-border rounded w-full py-2 px-3"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div>
                <button
                  className="flex align-middle justify-center gap-3 add-job-btn text-center text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In <FaArrowRight className="text-2xl" />
                </button>
              </div>
              <div>
                <p className="text-right p-4">
                  <span>Don't have account?</span>{" "}
                  <Link to="/sign-up">{"Sign Up"}</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
