"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const WelcomeCard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const imageLink = "/avatar-main-image.png";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const imageink = "/bg-semi-final.jpg";

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${imageink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`flex flex-col justify-center items-center md:items-start relative mt-12 md:mt-0 ${textColor}`}
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 text-center md:text-left ${textColor}`}
          >
            Welcome to <span className="text-yellow-400">Fast Gaming 🚀</span>
          </h1>
          <p
            className={`text-lg leading-relaxed mb-4 text-center md:text-left ${textColor}`}
          >
            Immerse yourself in a world of thrilling games and interactive
            experiences, where the excitement never ends.
          </p>
          <p
            className={`text-base leading-relaxed mb-4 text-center md:text-left ${textColor}`}
          >
            Join our vibrant community of gamers and enjoy the latest
            innovations in online gaming.
          </p>
          <p
            className={`text-xs md:text-sm lg:text-base font-bold text-yellow-400 mb-2 md:mb-4 sm:mb-10 text-center md:text-left ${textColor}`}
          >
            Spin, Bet, Win - Experience the Thrill of{" "}
            <span className="text-teal-500">Fast Gaming</span>!
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/games-list"
              className={`bg-yellow-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-600 focus:text-black ${textColor}`}
            >
              Click for the game links 👉
            </Link>
            {/* <Link
              href="/roulette"
              className={`bg-teal-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-teal-500 hover:text-black focus:bg-teal-600 focus:text-black mt-4 md:mt-0 ${textColor}`}
            >
              Enter the Roulette 🥳
            </Link> */}
            <Link
              href="/rules"
              className={`bg-yellow-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-600 focus:text-black mt-4 md:mt-0 ${textColor}`}
            >
              View Our Rules 🔥
            </Link>
            <Link
              href="/form-user"
              className={`bg-teal-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-600 focus:text-black mt-4 md:mt-0 ${textColor}`}
            >
              Enter the giveaway 🙋
            </Link>
          </div>
        </div>

        <div className="text-center md:text-right bg-transparent overflow-hidden">
          <div className="mt-0">
            <Image
              src={imageLink}
              alt="image"
              height={500}
              width={800}
              className="rounded-full ml-20 md:ml-0 md:mt-8"
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        {isDarkMode ? (
          <FaSun
            size={24}
            onClick={toggleMode}
            className="text-yellow-400 cursor-pointer"
          />
        ) : (
          <FaMoon
            size={24}
            onClick={toggleMode}
            className="text-gray-600 cursor-pointer"
          />
        )}
      </div>
    </main>
  );
};

export default WelcomeCard;
