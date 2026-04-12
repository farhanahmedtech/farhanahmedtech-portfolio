import HeroSection  from "./components/HeroSection";

// export const metadata = {
//   title: "Farhan Ahmed | Developer",
//   description: "Welcome to my portfolio website",
// };

export default function RetroFuturismPortfolio() {
  return (
    <div className="min-h-screen bg-[#0d0e12] text-white selection:bg-purple-500 selection:text-black font-['Manrope']">
      <main>
        <HeroSection />
      </main>
    </div>
  );
}