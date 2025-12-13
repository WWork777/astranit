import Hero from "@/components/main-page/Hero/Hero";
import Pluses from "@/components/main-page/Pluses/Pluses";
import Start from "@/components/main-page/Start/Start";
import UnderHero from "@/components/main-page/Under-hero/UnderHero";

export default function Home() {
  return (
    <>
      <Hero />
      <UnderHero />
      <Pluses />
      <Start />
    </>
  );
}
