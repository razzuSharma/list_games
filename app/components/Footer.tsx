import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 p-4">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
        <div className="md:flex items-center mb-4 md:mb-0">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Fast Gaming™ . All Rights Reserved.
          </span>
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              className="flex flex-row justify-center items-center gap-3 focus:outline-none"
              href="https://www.facebook.com/profile.php?id=100069283552516"
            >
              Connect with us on:
              <span>
                <FaFacebook />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
