import WelcomeCard from "./components/WelcomCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
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
      <WelcomeCard />
    </main>
  );
}
