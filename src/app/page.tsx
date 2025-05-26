import Hero from "@/components/page/home/Hero";
import Slider from "@/components/page/home/Slider";
import Benefits from "@/components/page/home/Benefits";
import OurCourses from "@/components/page/home/OurCourses";
import Testimonial from "@/components/page/home/Testimonial";

export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <Benefits/>
      <OurCourses/>
      <Testimonial/>
    </div>
  );
}
