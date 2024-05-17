import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";
import ProfilePage from "../views/ProfilePage";
import Toastify from "toastify-js";

const url = "http://localhost:3000";
const FS_URL = "https://platform.fatsecret.com/rest/server.api";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage url={url} />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
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

        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage url={url} />,
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Login to continue",
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
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage url={FS_URL} />,
      },
      {
        path: "/myprofile",
        element: <ProfilePage url={url} />,
      },
    ],
  },
]);

export default router;
