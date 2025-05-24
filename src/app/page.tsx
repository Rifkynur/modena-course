import Hero from "@/components/page/home/Hero";
import Slider from "@/components/page/home/Slider";
import Benefits from "@/components/page/home/Benefits";

export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <Benefits/>
    </div>
  );
}
