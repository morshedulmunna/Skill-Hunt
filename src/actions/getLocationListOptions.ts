import { API_URL } from "@/constant";
let countriesOptions = [] as [];

export const getLocationList = async () => {
  try {
    const countries = await fetch(`${API_URL}/api/location-list`);
    const response = (await countries.json()) as any;
    countriesOptions = response.results.locationOption;
  } catch (error) {
    console.error("Error fetching countries:", error);
    countriesOptions = [];
  }
  return countriesOptions;
};
