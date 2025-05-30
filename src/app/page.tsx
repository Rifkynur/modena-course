import Hero from "@/components/page/home/Hero";
import Slider from "@/components/page/home/Slider";
import Benefits from "@/components/page/home/Benefits";
import OurCourses from "@/components/page/home/OurCourses";
import Testimonial from "@/components/page/home/Testimonial";
import OurPricing from "@/components/page/home/OurPricing";
import Faq from "@/components/page/home/Faq";

export default function Home() {
  return (
    <div className="container min-h-screen">
      <Hero />
      <Slider />
      <Benefits />
      <OurCourses />
      <Testimonial />
      <OurPricing />
      <Faq />
    </div>
  );
}
