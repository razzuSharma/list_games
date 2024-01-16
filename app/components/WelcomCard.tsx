"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../globals.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animations from "../../public/flash-animation.json";
import { useRef } from "react";
import Image from "next/image";
const WelcomeCard = () => {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const avatarImage = "/happy.gif";
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-0 relative">
            Welcome to{" "}
            <span className="border-b-2 border-teal-500">Fast Gaming</span>
          </h1>
          <div className="w-32 mt-4 md:mt-0 md:ml-4">
            <Lottie
              lottieRef={phoneRef}
              onComplete={() => {
                phoneRef.current?.setDirection(-1);
                phoneRef.current?.play();
              }}
              animationData={animations}
            />
          </div>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-500 mb-3 md:mb-4">
          Play Smarter, Play Harder, Play With Fast Gaming
        </p>
        <p className="text-md md:text-base text-white mb-4 md:mb-6">
          Immerse yourself in a world of thrilling games and interactive
          experiences, where the excitement never ends.
        </p>
        <p className="text-sm md:text-base text-white mb-4 md:mb-6">
          Join our vibrant community of gamers and enjoy the latest innovations
          in online gaming.
        </p>
        <p className="text-xs md:text-sm  lg:text-lg font-bold text-yellow-400 mb-2 md:mb-4 sm:mb-10">
          Spin, Bet, Win - Experience the Thrill of Fast Gaming!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            className="bg-transparent border  border-yellow-400 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            href="/games-list"
          >
            Join the Fun Now ⚡
          </Link>
          <button
            className="bg-transparent border border-teal-400 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-teal-300 hover:text-black"
            onClick={() => setModalOpen(true)}
          >
            Check for the surprises 🥳
          </button>
          {modalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center gap-5">
              <div className="absolute w-full h-full bg-black opacity-50"></div>
              <div className="relative bg-white rounded-md p-8 flex">
                <div className="flex flex-col text-center items-center justify-center">
                  <h2 className="text-2xl font-bold text-teal-500 mb-4">
                    Coming Soon!
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We are working on something exciting. <br></br> Stay tuned for
                    surprises! 🎉
                  </p>
                  <button
                    className="bg-teal-500 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-teal-600"
                    onClick={() => setModalOpen(false)}
                  >
                    Okay
                  </button>
                </div>
                <div className="flex">
                  <Image
                    src={avatarImage}
                    alt="Waiting"
                    width={150}
                    height={150}
                    className="ml-5"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default WelcomeCard;
