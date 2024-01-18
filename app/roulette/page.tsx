"use client";
import React, { useEffect, useRef, useState } from "react";
import Roulette from "../components/Roulette";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface UserDropdownProps {
  session: Session | null;
  handleLogout: () => Promise<void>; // Update the type to represent an asynchronous function
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
      {children}
    </div>
  ) : null;
};

const UserDropdown: React.FC<UserDropdownProps> = ({
  session,
  handleLogout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mr-4" ref={dropdownRef}>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="user photo"
            height={30}
            width={30}
          />
        )}
        {session?.user?.name}
        <IoIosArrowDropdown />
      </button>

      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="truncate">{session?.user?.email}</div>
        </div>

        <div className="py-2">
          <a
            href="#"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </Dropdown>
    </div>
  );
};

const GameRoom: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("session data", session);
  const imageLink = session?.user?.image;
  console.log("image link", imageLink);
  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  if (!session) {
    router.push("/login");
    return null; // Return null or some loading state if the session is not available yet
  }

  return (
    <main className="flex justify-between items-center min-h-screen text-white bg-gradient-to-b from-black via-gray-800 to-gray-900 p-4">
      {/* <Image src={session?.user?.image} width={100} height={100} /> */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 text-yellow-400">
          Welcome to the Giveaway Room
        </h1>
        <hr className="border-gray-600 my-6" />
        <Roulette />
      </div>
      <div className="flex items-center">
        <span className="mr-4">You are signed in as:</span>
        <UserDropdown session={session} handleLogout={handleLogout} />
      </div>
    </main>
  );
};

export default GameRoom;
