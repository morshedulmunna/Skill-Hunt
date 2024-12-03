import FeaturesJobCarousel from "@/components/FeaturesJobCarousel";
import HeroSection from "@/components/HeroSection";
import SearchingSection from "@/components/SearchingSection";
import { CircularShapes } from "@/components/shapes/CircularShapes";
import BoxWrapper from "@/components/shared/BoxWrapper";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export default function Home(): React.ReactElement {
  return (
    <div className="w-full h-full">
      <div className="h-auto  relative overflow-hidden">
        <CircularShapes
          className={"absolute -top-32 rounded-full -left-40 rotate-90 "}
        />
        <HeroSection />

        <CircularShapes
          className={"absolute -bottom-32 rounded-full -right-40"}
        />
      </div>

      <MaxWidthWrapper className={"max-w-screen-lg w-full"}>
        <BoxWrapper className="w-full mx-auto   flex items-center justify-start p-3  h-auto border-gray-100/90  relative z-20 ">
          <SearchingSection />
        </BoxWrapper>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="mt-24">
        <FeaturesJobCarousel />
      </MaxWidthWrapper>
    </div>
  );
}
