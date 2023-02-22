"use client";
import { useState } from "react";
import { Inter } from "@next/font/google";
import { Roboto } from "@next/font/google";
import Login from "@/components/Auth/Login/Login";

import Registro from "../components/Auth/Register/Registro";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <main className={`${roboto.className}`}>
      {isLogin ? (
        <Login isLogin={setIsLogin} />
      ) : (
        <Registro isLogin={setIsLogin} />
      )}
    </main>
  );
}
