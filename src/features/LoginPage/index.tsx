import { LoginStyled } from "./styled";
import LoginForm from "./LoginForm";
import clsx from "clsx";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const token = Cookies.get("accessToken");

  return (
    <LoginStyled className={clsx("login-wrap")}>
      <div className="loginForm-container">
        <LoginForm />
      </div>
    </LoginStyled>
  );
};

export default Login;
