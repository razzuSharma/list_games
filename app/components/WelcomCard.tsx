"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animations from "../../public/flash-animation.json";
import Image from "next/image";
import avatarImage from "../../public/happy.gif"; // Make sure to provide the correct path

const WelcomeCard = () => {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  const [modalOpen, setModalOpen] = useState(false);

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
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-teal-500 mb-3 md:mb-4">
          Play Smarter, Play Harder, Play With{" "}
          <span className="text-yellow-400">Fast Gaming</span>
        </p>
        <p className="text-md md:text-lg text-gray-200 mb-4 md:mb-6">
          Immerse yourself in a world of thrilling games and interactive
          experiences, where the excitement never ends.
        </p>
        <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
          Join our vibrant community of gamers and enjoy the latest innovations
          in online gaming.
        </p>
        <p className="text-xs md:text-sm lg:text-base font-bold text-yellow-400 mb-2 md:mb-4 sm:mb-10">
          Spin, Bet, Win - Experience the Thrill of{" "}
          <span className="text-teal-500">Fast Gaming</span>!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/games-list"
            className="bg-transparent border border-yellow-400 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          >
            Join the Fun Now ⚡
          </Link>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-transparent border border-teal-400 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-teal-300 hover:text-black mt-2 md:mt-0"
          >
            Check for Surprises 🥳
          </button>
          {modalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center gap-5">
              <div className="absolute w-full h-full bg-black opacity-50"></div>
              <div className="relative bg-white rounded-md p-8 flex flex-col md:flex-row items-center justify-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-teal-500 mb-4">
                    Coming Soon!
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We are working on something exciting. <br /> Stay tuned for
                    surprises! 🎉
                  </p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="bg-teal-500 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-teal-600"
                  >
                    Okay
                  </button>
                </div>
                <div className="flex-shrink-0">
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
