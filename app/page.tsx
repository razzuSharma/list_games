import React from "react";
import WelcomeCard from "./components/WelcomCard";

export default function Home() {
  const dynamicId = "main-theme";
  const imageLink = "/bg-semi-final.jpg";

  return (
    <>
      <main
        id={dynamicId}
        className="flex min-h-screen flex-col items-center justify-between relative overflow-y-hidden"
        style={{
          backgroundImage: `url(${imageLink})`,
          backgroundSize: "cover", // Ensure the image covers the entire container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
        }}
      >
        <WelcomeCard />
      </main>
    </>
  );
}
