import React from "react";
import WelcomeCard from "./components/WelcomCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <source src="bg-video.mp4" type="video/mp4" />
        {/* You can add additional source elements for different video formats */}
        Your browser does not support the video tag.
      </video>

      {/* Dimming overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
          zIndex: "-1",
        }}
      />

      {/* Content */}
      <WelcomeCard />
    </main>
  );
}
