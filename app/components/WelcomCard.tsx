import React from "react";
import Image from "next/image";
import Link from "next/link";

const WelcomeCard = () => {
  const imageLink = "/avatar-main-image.png";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Column */}
        <div className="flex flex-col justify-center items-center md:items-start relative mt-12 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left text-gray-800">
            Welcome to <span className="text-yellow-400">Fast Gaming 🚀</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4 text-center md:text-left text-gray-800">
            Immerse yourself in a world of thrilling games and interactive experiences, where the excitement never ends.
          </p>
          <p className="text-base leading-relaxed mb-4 text-center md:text-left text-gray-800">
            Join our vibrant community of gamers and enjoy the latest innovations in online gaming.
          </p>
          <p className="text-sm md:text-base font-bold text-yellow-400 mb-2 md:mb-4 sm:mb-10 text-center md:text-left">
            Spin, Bet, Win - Experience the Thrill of{" "}
            <span className="text-teal-500">Fast Gaming</span>!
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/games-list"
              className="bg-yellow-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-600 focus:text-black"
            >
              Click for the game links 👉
            </Link>
            <Link
              href="/roulette"
              className="bg-teal-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-teal-500 hover:text-black focus:bg-teal-600 focus:text-black mt-4 md:mt-0"
            >
              Enter the Roulette 🥳
            </Link>
            <Link
              href="/rules"
              className="bg-yellow-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-600 focus:text-black mt-4 md:mt-0"
            >
              View Our Rules 🔥
            </Link>
            <Link
              href="/form-user"
              className="bg-teal-400 text-black py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-600 focus:text-black mt-4 md:mt-0"
            >
              Enter the giveaway 🙋
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="text-center md:text-right">
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
    </main>
  );
};

export default WelcomeCard;
