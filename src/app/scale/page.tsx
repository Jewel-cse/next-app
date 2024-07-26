import Hero from "@/components/cousel/hero";
import scaleImg from "/public/scale.jpg";

export default function scalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="steel factory"
        title="Scale your app to infinity"
      />
    </div>
  );
}
