export default function Home() {
  const svgBackground = {
    backgroundImage: 'url("background.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={svgBackground}>
      <h2>This is the new project</h2>
    </main>
  );
}
