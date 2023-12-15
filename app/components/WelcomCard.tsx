"use client";
import React from "react";
import { Link } from "react-scroll";
const WelcomeCard = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-10 relative">
          Welcome to{" "}
          <span className="border-b-2 border-teal-500">Fast Gaming</span>
        </h1>
        <p className="text-xl font-semibold text-gray-500 mb-4">
          "Play Smarter, Play Harder, Play With Fast Gaming"
        </p>
        <p className="text-white mb-6">
          Immerse yourself in a world of thrilling games and interactive
          experiences, where the excitement never ends.
        </p>
        <p className="text-white mb-6">
          Join our vibrant community of gamers and enjoy the latest innovations
          in online gaming.
        </p>
        <p className="text-lg font-bold text-yellow-400 mb-4">
          Spin, Bet, Win - Experience the Thrill of Fast Gaming!
        </p>
        <Link
          to="nextSection"
          smooth={true}
          duration={500}
          className="bg-transparent border border-yellow-400 text-white py-2 px-4 rounded-md transition-all duration-300 cursor-pointer hover:bg-yellow-400 hover:text-black"
        >
          Join the Fun Now!
        </Link>
      </div>
    </main>
  );
};

export default WelcomeCard;
