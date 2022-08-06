import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LogoutPage from "../pages/LogoutPage";


import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.home,
    page: <HomePage/>,
    private: true,
  },
  {
    path: pathName.login,
    page: <LoginPage/>,
    private: false,
  },
  {
    path: pathName.register,
    page: <RegisterPage/>,
    private: false,
  },
  {
    path: pathName.logout,
    page: <LogoutPage/>,
    private: true,
  },
]