"use client";
import React, { useEffect } from "react";
import Roulette from "../components/Roulette";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct import for useRouter

const GameRoom: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("first", session);
  if (!session) {
    router.push("/login");
  }

  return (
    <main className="flex justify-center items-center min-h-screen text-white bg-gradient-to-b from-black via-gray-800 to-gray-900">
      <Link href="/api/auth/signout">Logout</Link>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 text-yellow-400">
          Welcome to the Giveaway Room
        </h1>
        <hr className="border-gray-600 my-6" />
        <Roulette />
      </div>
    </main>
  );
};

export default GameRoom;
