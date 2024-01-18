// src/components/CardComponent.tsx
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

interface Game {
  name: string;
  image: string;
  link: string;
}

interface CardComponentProps {
  data: Game[];
}

const CardComponent = ({ data }: CardComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const imageUrl = "/image.jpg";
  const filteredData = data.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main
      className="bg-cover bg-center min-h-screen bg-gradient-to-r from-slate-300 to-slate-500"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-white">
            <FaArrowLeft className="mr-2 text-2xl" />
            <span className="text-lg font-semibold">Back</span>
          </Link>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-b border-white text-white pl-4 pr-8 py-2 focus:outline-none focus:border-[#abd373] transition-all duration-300"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
            <FaSearch className="text-white absolute right-2 cursor-pointer" />
          </div>
        </div>
        <h1 className="text-4xl text-center font-bold text-white mb-8">
          🎰 Our Games 🎲
        </h1>

        <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
          {filteredData.map((game: Game, index: number) => (
            <Link
              key={index}
              href={game.link}
              passHref
              className="group relative p-2 sm:p-4 transition-all duration-300 hover:scale-105"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-cover bg-center rounded-full border-4 border-[#abd373] shadow-md mx-auto">
                <div className="flex items-center justify-center h-full">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full"
                  />
                </div>
              </div>
              <p className="cardtxt text-gray-200 tracking-wider text-xs sm:text-sm font-bold mt-2 text-center">
                {game.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CardComponent;
