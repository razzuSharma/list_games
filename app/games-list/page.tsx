// Import necessary dependencies and styles
"use client";
import React, { useMemo } from "react";
import CardComponent from "../components/CardComponent";


type GameProps = {
  name: string;
  image: string; // Adjust the type as per your actual data
  link: string;
};


const GamesList = () => {
  const gameImage = "/casino.jpg";
  // Sample game data

    const games: GameProps[] = useMemo(() => [
    {
      name: "Orion Stars",
      image: gameImage,
      link: "http://orionstars.vip:8580/index.html",
    },
    {
      name: "Milky Ways",
      image: gameImage,
      link: "http://milkywayapp.xyz:8580/index.html",
    },
    {
      name: "Fire Kirin",
      image: gameImage,
      link: "http://firekirin.xyz:8580/index.html",
    },
    { name: "Juwa", image: gameImage, link: "https://dl.juwa777.com" },
    {
      name: "River Sweep",
      image: gameImage,
      link: "https://bet777.eu/play/?fbclid=IwAR07eRxbNfwb4Kcui-xrYTjff9oISIETOCxVnrCNAXe-gwu9SNBlDGjS154",
    },
    {
      name: "VB Link",
      image: gameImage,
      link: "https://www.vblink777.club/",
    },
    {
      name: "Para Casino",
      image: gameImage,
      link: "https://download.paracasino.net/",
    },
    {
      name: "Sirius",
      image: gameImage,
      link: "https://m.gamesirius999.com/",
    },
    {
      name: "LasVegas Sweeps",
      image: gameImage,
      link: "https://m.lasvegassweeps.com",
    },
    {
      name: "Highstake Sweeps",
      image: gameImage,
      link: "http://Dl.highstakesweeps.com",
    },
    {
      name: "Game Vault",
      image: gameImage,
      link: "https://download.gamevault999.com/",
    },
    {
      name: "Panda Master",
      image: gameImage,
      link: "https://pandamaster.vip:8888/index.html",
    },
    { name: "Medusa", image: gameImage, link: "https://medusa777.com/" },
    { name: "Moolah", image: gameImage, link: "https://moolah.vip:8888/" },
    {
      name: "Casino Ignite",
      image: gameImage,
      link: "https://download.casinoignite.vip/",
    },
    {
      name: "Casino Royale",
      image: gameImage,
      link: "http://m.casinoroyale07.com/",
    },
    {
      name: "Game Room",
      image: gameImage,
      link: "https://www.gameroom777.com/m",
    },
    {
      name: "Mr All in One",
      image: gameImage,
      link: "http://www.mrallinone777.com/m",
    },
    {
      name: "Blue Dragon",
      image: gameImage,
      link: "http://Www.bluedragon777.com",
    },
    {
      name: "Mega Spin",
      image: gameImage,
      link: "http://www.megaspinsweeps.com/",
    },
    {
      name: "King of Pop",
      image: gameImage,
      link: "https://www.slots88888.com/m",
    },
    { name: "Mafia", image: gameImage, link: "http://www.mafia77777.com/" },
    {
      name: "Cash Machine",
      image: gameImage,
      link: "http://www.cashmachine777.com/m",
    },
    {
      name: "Noble System",
      image: gameImage,
      link: "https://www.noble777.com/",
    },
    {
      name: "Cash Frenzy",
      image: gameImage,
      link: "https://www.cashfrenzy777.com/m",
    },
    { name: "Loot", image: gameImage, link: "http://m.lootgame777.com" },
    {
      name: "Win Star",
      image: gameImage,
      link: "http://server.winstar99999.com:8009/m",
    },

  ], []);

  return (
    <>
      <CardComponent data={games} />
    </>
  );
};

export default GamesList;
