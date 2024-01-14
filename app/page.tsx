import React from "react";
import WelcomeCard from "./components/WelcomCard";
import WhyUsPage from "./components/WhyUsPage";

interface WelcomeCardProps {
  dynamicId: string;
}
export default function Home() {
  const dynamicId = "main-theme";
  return (
    <>
      <main
        id={dynamicId}
        className="flex min-h-screen flex-col items-center justify-between relative overflow-y-hidden"
      >
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
          Your browser does not support the video tag.
        </video>

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
        <WelcomeCard />
        <WhyUsPage />
      </main>
    </>
  );
}
