"use client";
import React from "react";
import Link from "next/link";

const WelcomeCard = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-5 md:mb-8 relative">
          Welcome to{" "}
          <span className="border-b-2 border-teal-500">Fast Gaming</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-500 mb-3 md:mb-4">
          Play Smarter, Play Harder, Play With Fast Gaming
        </p>
        <p className="text-sm md:text-base text-white mb-4 md:mb-6">
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
        <Link
          className="bg-transparent border  border-yellow-400 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          href="/games-list" // Replace with your desired action
        >
          Join the Fun Now!
        </Link>
      </div>
    </main>
  );
};

export default WelcomeCard;
