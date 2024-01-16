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


  const gameImage = "/images/orionstars.jpg";
  const gameImage1 = "/images/milkyways.jpg";
  const gameImage2 = "/images/firekirin.jpg";
  const gameImage211 = "/images/juwa.jpg";
  const gameImage3 = "/images/river-sweeps.jpg";
  const gameImage4 = "/images/vbline.png";
  const gameImage5 = "/images/something-casino.jpg";
  const gameImage6 = "/images/sirius.jpg";
  const gameImage7 = "/images/vegassweeps.jpg";
  const gameImage8 = "/images/something-casino.jpg";
  const gameImage9 = "/images/game-vault.jpg";
  const gameImage10 = "/images/panda-master.jpg";
  const gameImage11 = "/images/medusa-money.jpg";
  const gameImage12 = "/images/moodah.jpg";
  const gameImage14 = "/images/casino-ignite.jpg";
  const gameImage15 = "/images/casino-royale.jpg";
  const gameImage16 = "/images/gameRoom-online.jpg";
  const gameImage17 = "/images/mrallinone.png";
  const gameImage18 = "/images/blue-dragon.jpg";
  const gameImage19 = "/images/mega-spin.jpg";
  const gameImage20 = "/images/kingOfPoP.jpg";
  const gameImage21 = "/images/mafia.jpg";
  const gameImage22 = "/images/cash-machine.jpg";
  const gameImage23 = "/images/777noble.png";
  const gameImage24 = "/images/777.jpg";
  const gameImage25 = "/images/something-else.jpg";
  const gameImage26 = "/images/something-casino.jpg";
  // Sample game data

  const games: GameProps[] = useMemo(
    () => [
      {
        name: "Orion Stars",
        image: gameImage,
        link: "http://orionstars.vip:8580/index.html",
      },
      {
        name: "Milky Ways",
        image: gameImage1,
        link: "http://milkywayapp.xyz:8580/index.html",
      },
      {
        name: "Fire Kirin",
        image: gameImage2,
        link: "http://firekirin.xyz:8580/index.html",
      },
      { name: "Juwa", image: gameImage211, link: "https://dl.juwa777.com" },
      {
        name: "River Sweep",
        image: gameImage3,
        link: "https://bet777.eu/play/?fbclid=IwAR07eRxbNfwb4Kcui-xrYTjff9oISIETOCxVnrCNAXe-gwu9SNBlDGjS154",
      },
      {
        name: "VB Link",
        image: gameImage4,
        link: "https://www.vblink777.club/",
      },
      {
        name: "Para Casino",
        image: gameImage5,
        link: "https://download.paracasino.net/",
      },
      {
        name: "Sirius",
        image: gameImage6,
        link: "https://m.gamesirius999.com/",
      },
      {
        name: "LasVegas Sweeps",
        image: gameImage7,
        link: "https://m.lasvegassweeps.com",
      },
      {
        name: "Highstake Sweeps",
        image: gameImage8,
        link: "http://Dl.highstakesweeps.com",
      },
      {
        name: "Game Vault",
        image: gameImage9,
        link: "https://download.gamevault999.com/",
      },
      {
        name: "Panda Master",
        image: gameImage10,
        link: "https://pandamaster.vip:8888/index.html",
      },
      { name: "Medusa", image: gameImage11, link: "https://medusa777.com/" },

      { name: "Moolah", image: gameImage12, link: "https://moolah.vip:8888/" },
      {
        name: "Casino Ignite",
        image: gameImage14,
        link: "https://download.casinoignite.vip/",
      },
      {
        name: "Casino Royale",
        image: gameImage15,
        link: "http://m.casinoroyale07.com/",
      },
      {
        name: "Game Room",
        image: gameImage16,
        link: "https://www.gameroom777.com/m",
      },
      {
        name: "Mr All in One",
        image: gameImage17,
        link: "http://www.mrallinone777.com/m",
      },
      {
        name: "Blue Dragon",
        image: gameImage18,
        link: "http://Www.bluedragon777.com",
      },
      {
        name: "Mega Spin",
        image: gameImage19,
        link: "http://www.megaspinsweeps.com/",
      },
      {
        name: "King of Pop",
        image: gameImage20,
        link: "https://www.slots88888.com/m",
      },
      { name: "Mafia", image: gameImage21, link: "http://www.mafia77777.com/" },
      {
        name: "Cash Machine",
        image: gameImage22,
        link: "http://www.cashmachine777.com/m",
      },
      {
        name: "Noble System",
        image: gameImage23,
        link: "https://www.noble777.com/",
      },
      {
        name: "Cash Frenzy",
        image: gameImage24,
        link: "https://www.cashfrenzy777.com/m",
      },
      { name: "Loot", image: gameImage25, link: "http://m.lootgame777.com" },
      {
        name: "Win Star",
        image: gameImage26,
        link: "http://server.winstar99999.com:8009/m",
      },
    ],
    []
  );

  return (
    <>
      <CardComponent data={games} />
    </>
  );
};

export default GamesList;
