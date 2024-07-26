import Hero from "@/components/cousel/hero";
import reliabilityImg from "/public/reliability.jpg";

export default function reliabilityPage() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
