import { SERVER_HOST } from "@/constant";

let categoriesOptions = [] as any;

export async function getCategoriesFn() {
  try {
    const res = await fetch(`${SERVER_HOST}/categoris-list`);
    const categoriesResponse = (await res.json()) as any;
    categoriesOptions = categoriesResponse.results.categoriesListOption;
  } catch (error) {
    console.error("Error fetching countries:", error);
    categoriesOptions = [];
  }
  return categoriesOptions;
}
