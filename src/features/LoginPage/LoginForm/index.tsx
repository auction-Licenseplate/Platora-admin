import { LoginFormStyled } from "./styled";
import { Input, Button, Modal } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import { Router, useRouter } from "next/router";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Image from "next/image";
import seeimg from "@/imgaes/seeImgBlack.png";
import notsee from "@/imgaes/notseeImgBlack.png";
const LoginForm = () => {
  const [see, setSee] = useState("password");
  const router = useRouter();

  const seepw = () => {
    if (see === "password") {
      setSee("text");
    } else {
      setSee("password");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };

      axios
        .post("http://15.164.52.122/auth/login", data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }) // 서버 URL
        .then((res) => {
          Cookie.set("accessToken", res.data.token, {
            path: "/",ㄹㄹ
            expires: 3 / 24, // 3시간
          });
          router.push("/");
        })
        .catch((error) => {
          Modal.error({
            content: `${error.response.data.message}`,
          });
        });
    },
  });
  return (
    <LoginFormStyled className={clsx("loginForm-wrap")}>
      <div className="loginForm-container1">
        <form className="loginForm-form" onSubmit={formik.handleSubmit}>
          <h1>로그인</h1>
          <div className="loginForm-idDiv">
            <Input
              type="email"
              id="email"
              onChange={formik.handleChange}
              placeholder="abc123@xxx.com"
              required
            />
          </div>
          <div className="loginForm-idDiv">
            <Input
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type={see}
              onChange={formik.handleChange}
              required
            />
            <div className="loginForm-seePw" onClick={seepw}>
              <Image
                src={see === "password" ? seeimg : notsee}
                alt="pwsee"
                width={20}
              />
            </div>
          </div>

          <Button className="loginBtn" htmlType="submit">
            로그인
          </Button>
        </form>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
