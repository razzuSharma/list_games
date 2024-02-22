import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const RulesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto mt-8 flex-grow">
        <Link href="/" className="flex items-center text-white mt-10">
          <FaArrowLeft className="mr-2 text-2xl" />
          <span className="text-lg font-semibold">Back</span>
        </Link>
        <h1 className="text-3xl font-semibold mb-10 text-center mt-5">
          🎮 Game Rules 🕹️
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <RuleCard
            emoji="🏆"
            title="Rule 1"
            description="After every 10 deposits 10$ freeplay and applies to only 5$ or more"
            gradientFrom="from-purple-400"
            gradientTo="to-indigo-500"
          />
          <RuleCard
            emoji="🎲"
            title="Rule 2"
            description="We are not responsible if you send payment to the wrong tag."
            gradientFrom="from-yellow-400"
            gradientTo="to-red-500"
          />
          <RuleCard
            emoji="🔥"
            title="Rule 3"
            description="Any extra credits over max cashout will be voided"
            gradientFrom="from-green-400"
            gradientTo="to-blue-500"
          />
          <RuleCard
            emoji="💣"
            title="Rule 4"
            description="We are not responsible for any game and phone glitches"
            gradientFrom="from-pink-400"
            gradientTo="to-rose-500"
          />
          <RuleCard
            emoji="👾"
            title="Rule 5"
            description="If you cancel or dispute any payment you will be banned and lose your deposit"
            gradientFrom="from-cyan-400"
            gradientTo="to-sky-500"
          />
          <RuleCard
            emoji="🎮"
            title="Rule 6"
            description="Only one Facebook | Cash app account per plays"
            gradientFrom="from-teal-400"
            gradientTo="to-emerald-500"
          />
          <RuleCard
            emoji="🕹️"
            title="Rule 7"
            description="Any extra credits over max cashout will be void"
            gradientFrom="from-orange-400"
            gradientTo="to-amber-500"
          />
        </div>
      </div>
    </div>
  );
};

const RuleCard = ({
  emoji,
  title,
  description,
  gradientFrom,
  gradientTo,
}: any) => {
  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg shadow-md p-6 text-white`}
    >
      <h2 className="text-xl font-semibold mb-2">
        {emoji} {title}
      </h2>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default RulesPage;
