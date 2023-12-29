'use client'

import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

interface StyleType {
  backgroundColor?: string; 
  textColor?: string; 
  fontFamily?: string; 
  fontSize?: string; 
  fontWeight?: number | string; 
  fontStyle?: string; 
  width?: number;
}

interface WheelData {
  option?: string;
  style?: StyleType; // Optional
  optionSize?: number; // Optional
}

const Roulette = () => {
  const data = [
    { option: "0", style: { backgroundColor: "#f44336", textColor: "white" } },
    { option: "1", style: { backgroundColor: "#2196F3", textColor: "white" } },
    { option: "2", style: { backgroundColor: "#4CAF50", textColor: "white" } },
    { option: "3", style: { backgroundColor: "#FFC107", textColor: "black" } },
    { option: "4", style: { backgroundColor: "#9C27B0", textColor: "white" } },
    // Add more options with different colors as needed
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white ">
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
        className="bg-yellow-400 text-black py-2 px-4 rounded-md text-sm md:text-base mt-8 transition-all duration-300 hover:bg-yellow-500"
        onClick={handleSpinClick}
      >
        SPIN
      </button>
    </div>
  );
};

export default Roulette;
