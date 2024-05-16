import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Toastify from "toastify-js";
import axios from "axios";

export default function LoginPage({ url }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const loginData = { email, password };
      const { data } = await axios.post(`${url}/login`, loginData);

      localStorage.setItem("access_token", data.access_token);
      Toastify({
        text: "You have successfully logged in",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#7ABA78",
        },
      }).showToast();
      navigate("/");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#A91D3A",
        },
      }).showToast();
    }
  }

  async function googleLogin(codeResponse) {
    try {
      const { data } = await axios.post(`${url}/google-login`, null, {
        headers: {
          token: codeResponse.credential,
        },
      });
      localStorage.setItem("access_token", data.access_token);
      Toastify({
        text: "You have successfully logged in",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#7ABA78",
        },
      }).showToast();
      navigate("/");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#A91D3A",
        },
      }).showToast();
    }
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Log in with your{" "}
              <span className="text-primary underline decoration-wavy ">
                CaloCare
              </span>{" "}
              Account.
            </h1>
            <p className="py-6 text-xl">
              Check your BMI and weight status, and get your healthy daily meal
              plan based on your goal.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form
              onSubmit={(event) => handleLogin(event)}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <label className="label m-auto">
                  <p>
                    Don&apos;t have an account yet? &nbsp;
                    <span
                      onClick={() => navigate("/register")}
                      className="link link-primary"
                    >
                      Create a CaloCare account
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider divider-primary">OR</div>
            <div className="flex justify-center my-4">
              <GoogleLogin onSuccess={googleLogin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
