"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full sm:max-w-md bg-white rounded-lg shadow-md dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-2xl font-bold text-center leading-tight tracking-tight text-gray-900 dark:text-white">
            Login or Sign Up
          </h1>
          <form onSubmit={submitHandler} className="space-y-4">
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => signIn("facebook")}
                className="bg-blue-500 flex items-center gap-3 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                <FaFacebook /> Sign In with Facebook
              </button>
            </div>
            <div className="flex justify-center">
              <h3 className="text-gray-700 dark:text-gray-300">Or</h3>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => signIn("google")}
                className="bg-red-500 flex items-center gap-3 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                <FaGoogle /> Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
