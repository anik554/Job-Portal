import Lottie from "lottie-react";
import registerLottie from "../assets/registerMotion.json";
import { useContext, useState } from "react";
import AuthContext from "../context/authContext/AuthContext";
import GoogleLogin from "../common/GoogleLogin";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regInfo, setRegInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    createUser(regInfo.email, regInfo.password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="hero" style={{ minHeight: `calc(100vh - 68px)` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-4/12">
          <Lottie animationData={registerLottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={hendleSubmit} className="card-body">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <div className="card-body -mt-16">
            <div className="divider">OR</div>
            <div className="-mt-3">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
