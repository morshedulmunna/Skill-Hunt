import { getCategories, getCountryList } from "@/actions/action";
import FeaturesJobCarousel from "@/components/FeaturesJobCarousel";
import HeroSection from "@/components/HeroSection";
import SearchingSection from "@/components/SearchingSection";
import { CircularShapes } from "@/components/shapes/CircularShapes";
import BoxWrapper from "@/components/shared/BoxWrapper";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { SERVER_HOST } from "@/constant";

export default async function Home(): Promise<React.ReactElement> {
  const category = (await getCategories()) as any;
  let countriesOptions = [] as any;
  let categoriesOptions = [] as any;
  try {
    const countries = await fetch(`${SERVER_HOST}/location-list`);
    const response = (await countries.json()) as any;
    countriesOptions = response.results.locationOption;

    const res = await fetch(`${SERVER_HOST}/categoris-list`);
    const categoriesResponse = (await res.json()) as any;
    categoriesOptions = categoriesResponse.results.categoriesListOption;
  } catch (error) {
    console.error("Error fetching countries:", error);
    countriesOptions = [];
    categoriesOptions = [];
  }

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

      <MaxWidthWrapper className={"max-w-screen-md w-full -mt-8"}>
        <BoxWrapper className="w-full mx-auto   flex items-center justify-start px-3 py-6  h-auto lg:h-[80px] border-gray-100/90  relative z-20 ">
          <SearchingSection
            categoriesOptions={categoriesOptions}
            countries={countriesOptions}
          />
        </BoxWrapper>
      </MaxWidthWrapper>

      <div className="mt-16 mb-12">
        <MaxWidthWrapper>
          <h2 className="mb-4 text-xl font-semibold">Features Jobs</h2>
        </MaxWidthWrapper>
        <MaxWidthWrapper className=" max-w-screen-2xl">
          <FeaturesJobCarousel />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
