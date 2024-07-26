import Hero from "@/components/cousel/hero";
import performanceImg from "/public/performance.jpg";

export default function performancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve performance applications"
      />
    </div>
  );
}
