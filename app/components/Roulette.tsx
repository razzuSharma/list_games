"use client";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useMemo, useState } from "react";
import { Wheel } from "react-custom-roulette";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);





const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  // const fetchDataFromDB = async () => {
  //   try {
  //     const { data, error } = await supabase.from("profiles").select("*");
  //     if (error) {
  //       console.error("Error fetching data:", error.message);
  //     } else {
  //       console.log("Data fetched successfully:", data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:");
  //   }
  // };

  // useEffect(() => {
  //   fetchDataFromDB();
  // }, []);

  const data: Array<{
    option: string;
    style: { backgroundColor: string; textColor: string };
  }> = useMemo(
    () => [
      {
        option: "Claim 5$",
        style: { backgroundColor: "#f44336", textColor: "white" },
      },
      {
        option: "Win 50$",
        style: { backgroundColor: "#2196F3", textColor: "white" },
      },
      {
        option: "Try Again",
        style: { backgroundColor: "#4CAF50", textColor: "white" },
      },
      {
        option: "Free VB Points 100",
        style: { backgroundColor: "#FFC107", textColor: "black" },
      },
      {
        option: "Free VB Points 5",
        style: { backgroundColor: "#9C27B0", textColor: "white" },
      },
      {
        option: "Try Again",
        style: { backgroundColor: "#9C28B0", textColor: "white" },
      },
      // Add more options with different colors as needed
    ],
    []
  );

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data?.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  text-white">
      <p className="text-base md:text-lg text-gray-400 mb-4">
        Spin the wheel and embrace the madness! 🌀
      </p>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor="transparent"
        onStopSpinning={() => {
          setMustSpin(false);
          const winnerOption = data[prizeNumber]?.option;
          alert(`Congratulations! You won on option ${winnerOption}!`);
        }}
      />
      <button
        className="bg-yellow-400 text-black py-2 px-4 tracking-widest w-48 rounded-md text-sm md:text-base mt-5 transition-all duration-300 hover:bg-yellow-500"
        onClick={handleSpinClick}
      >
        SPIN
      </button>
    </div>
  );
};

export default Roulette;
