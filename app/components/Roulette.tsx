"use client";

import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useMemo, useState } from "react";
import { Wheel } from "react-custom-roulette";
import Modal from "./Modal";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const WinningForm = ({ winningAmount, onSubmit }: any) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    amount: winningAmount,
    cashapp: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const existingParticipant = await supabase
        .from("roulette")
        .select("*")
        .eq("cashapp", formData.cashapp)
        .single();

      if (existingParticipant.data) {
        alert("You have already participated in the giveaway!");
        return;
      }

      const { data, error } = await supabase.from("roulette").insert([
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          winning_prize: formData.amount,
          cashapp: formData.cashapp,
        },
      ]);
      if (error) {
        throw error;
      }
      onSubmit();
    } catch (error: any) {
      console.error("Error saving winning amount:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="firstName" className="block mb-2 text-lg text-gray-400">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
        required
        placeholder="Enter your name or nickname"
      />
      <label htmlFor="lastName" className="block mb-2 text-lg text-gray-400">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
        placeholder="Enter your last name"
      />
      <label htmlFor="amount" className="block mb-2 text-lg text-gray-400">
        Winning Prize:
      </label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={formData.amount}
        className="w-full py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
        required
      />
      <label htmlFor="cashapp" className="block mb-2 text-lg text-gray-400">
        CashApp Id
      </label>
      <input
        type="text"
        id="cashapp"
        name="cashapp"
        value={formData.cashapp}
        onChange={handleChange}
        className="w-full py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
        required
        placeholder="Enter your cashapp id"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-black py-2 px-4 mt-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-yellow-500"
      >
        Submit
      </button>
    </form>
  );
};

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);
  const [winningAmount, setWinningAmount] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [sessionSpun, setSessionSpun] = useState(false);
  const [userEntered, setUserEntered] = useState(false);
  const [spinCount, setSpinCount] = useState(() => {
    const storedSpinCount = localStorage.getItem("spinCount");
    return storedSpinCount ? parseInt(storedSpinCount, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("sessionSpun", sessionSpun.toString());
    localStorage.setItem("userEntered", userEntered.toString());
    localStorage.setItem("spinCount", spinCount.toString());
  }, [sessionSpun, userEntered, spinCount]);

  useEffect(() => {
    const sessionSpunFlag = localStorage.getItem("sessionSpun");
    if (sessionSpunFlag === "true") {
      setSessionSpun(true);
    }

    const userEnteredFlag = localStorage.getItem("userEntered");
    if (userEnteredFlag === "true") {
      setUserEntered(true);
    }

    if (spinCount === 0) {
      setShowMessage(true);
    }
  }, []);

  const data = useMemo(
    () => [
      {
        option: "Won 5$",
        style: { backgroundColor: "#f44336", textColor: "white" },
      },
      {
        option: "Won 10$",
        style: { backgroundColor: "#2196F3", textColor: "white" },
      },
      {
        option: "Try Again",
        style: { backgroundColor: "#4CAF50", textColor: "white" },
      },
      {
        option: "You won 100 points",
        style: { backgroundColor: "#FFC107", textColor: "black" },
      },
      {
        option: "You won 5 points",
        style: { backgroundColor: "#9C27B0", textColor: "white" },
      },
      {
        option: "Try Again",
        style: { backgroundColor: "#9C28B0", textColor: "white" },
      },
    ],
    []
  );

  const handleSpinClick = () => {
    if (!mustSpin && !sessionSpun && spinCount > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setSpinCount((prevSpinCount) => prevSpinCount - 1);
      setSessionSpun(true);
    }
  };

  const handleFormSubmit = () => {
    setDisplayForm(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    const winnerOption = data[prizeNumber]?.option;

    if (winnerOption === "Try Again") {
      setShowMessage(true);
    } else {
      setWinningAmount(winnerOption);
      handleFormSubmit();
    }
  };

  const closeModal = () => {
    setShowMessage(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-base md:text-lg text-gray-400 mb-4">
        <span
          style={{ color: spinCount === 0 ? "red" : "green" }}
          className="text-2xl font-bold"
        >
          {" "}
          Spin count ({spinCount})
        </span>
      </p>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor="transparent"
        onStopSpinning={handleStopSpinning}
      />
      {displayForm && (
        <WinningForm
          winningAmount={winningAmount}
          onSubmit={() => setDisplayForm(false)}
        />
      )}
      <Modal show={showMessage} onClose={closeModal}>
        <p className="text-black p-5 mb-5">
          Thank you for participating! Unfortunately, you have exhausted all
          your spins for this session.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-yellow-400 text-black py-2 px-4 rounded-md text-sm md:text-base mr-2 transition-all duration-300 hover:bg-yellow-500"
            onClick={closeModal}
          >
            Close
          </button>
          <Link
            href="/"
            className="bg-blue-400 text-white py-2 px-4 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-blue-500 ml-2"
          >
            Visit Our Games
          </Link>
        </div>
      </Modal>

      <button
        className="bg-yellow-400 text-black py-2 px-4 tracking-widest w-48 rounded-md text-sm md:text-base mt-5 transition-all duration-300 hover:bg-yellow-500"
        onClick={handleSpinClick}
        disabled={displayForm || sessionSpun || spinCount === 0}
      >
        SPIN
      </button>
    </div>
  );
};

export default Roulette;
