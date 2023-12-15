"use client";
import React from "react";

const WelcomeCard = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-10 relative">
          Welcome to{" "}
          <span className="border-b-2 border-teal-500">Fast Gaming</span>
        </h1>
        <p className="text-xl font-semibold text-gray-500 mb-4">
          `&quot`Play Smarter, Play Harder, Play With Fast Gaming`&quot`
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
        <button
          className="bg-transparent border border-yellow-400 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          onClick={() => alert("Button Clicked")} // Replace with your desired action
        >
          Join the Fun Now!
        </button>
      </div>
    </main>
  );
};

export default WelcomeCard;
