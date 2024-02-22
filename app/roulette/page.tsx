import React from "react";
import Roulette from "../components/Roulette";

const GameRoom: React.FC = () => {
  return (
    <main className="flex justify-center items-center min-h-screen text-white bg-gradient-to-b from-black via-gray-800 to-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 text-yellow-400">
          Welcome to the Giveaway Room  
        </h1>
        <hr className="border-gray-600" />
        <Roulette />
      </div>
    </main>
  );
};

export default GameRoom;
