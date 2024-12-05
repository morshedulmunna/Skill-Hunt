import { SERVER_HOST } from "@/constant";
let countriesOptions = [] as [];

export const getLocationList = async () => {
  try {
    const countries = await fetch(`${SERVER_HOST}/location-list`, {
      cache: "no-store",
    });
    const response = (await countries.json()) as any;
    countriesOptions = response.results.locationOption;
  } catch (error) {
    console.error("Error fetching countries:", error);
    countriesOptions = [];
  }
  return countriesOptions;
};
