"use client"
import React, { useEffect } from "react";
import Roulette from "../components/Roulette";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const GameRoom: React.FC = () => {
  const { data: session, status } = useSession({
    required: false, // Set to false to allow manual handling
  });

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // User is authenticated, proceed with rendering the page
    } else if (status === "loading") {
      // Session is still loading, you can show a loading indicator
    } else {
      // User is not authenticated, redirect to login page
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <main className="flex justify-center items-center min-h-screen text-white bg-gradient-to-b from-black via-gray-800 to-gray-900 ">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 text-yellow-400">
            Welcome to the Giveaway Room
          </h1>
          <hr className="border-gray-600 my-6" />
          <Roulette />
        </div>
      </main>
    );
  }

  // Placeholder content while checking authentication status
  return <div>Loading...</div>;
};

export default GameRoom;
