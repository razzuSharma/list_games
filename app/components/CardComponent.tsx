import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { FaSearch, FaArrowLeft } from "react-icons/fa"; // Import the back button icon
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

  const filteredData = data.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main
      className="bg-cover bg-center min-h-screen bg-green-900"
      style={{ backgroundImage: 'url("/background-image.jpg")' }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredData.map((game: Game, index: number) => (
            <div
              data-aos="fade-right"
              key={index}
              className="group px-10 py-5 bg-gradient-to-b from-green-800 to-green-700 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
            >
              <div
                className="w-44 h-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
                style={{
                  background: `radial-gradient(circle at 50% 50%, transparent 70%, #abd373), url(${game.image}) center/cover`,
                }}
              ></div>
              <p className="cardtxt text-gray-200 tracking-wider group-hover:text-gray-700 text-xl font-bold">
                {game.name}
              </p>

              <div className="ordernow flex flex-row justify-between items-center w-full">
                <a
                  href={game.link}
                  className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Game
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CardComponent;
