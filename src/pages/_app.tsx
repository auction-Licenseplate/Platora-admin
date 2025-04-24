import Header from "@/features/Header";
import NotPc from "@/features/NotPc";
import Template from "@/layouts/Template";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [notPc, setNotPc] = useState(false);

  const token = Cookies.get("accessToken");
  const router = useRouter();

  useEffect(() => {
    if (!token) router.push("/login");

    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setNotPc(true);
      } else {
        setNotPc(false);
      }
    };

    // 초기 width 확인
    handleResize();

    // resize 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get("http://52.62.79.236/auth/getRole", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const role = res.data;

        console.log(role);

        if (role !== "admin") {
          router.replace("http://13.125.95.215");
        }
      } catch (error) {
        console.error("유저 정보 요청 실패:", error);
      }
    };

    checkAdmin();
  }, [token]);

  return (
    <>
      <Head>
        <title>관리자</title>
      </Head>

      {notPc ? (
        <NotPc />
      ) : (
        <>
          <Header />

          <Template>
            <Component {...pageProps} />
          </Template>
        </>
      )}
    </>
  );
}
