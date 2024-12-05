import { API_URL } from "@/constant";

let categoriesOptions = [] as any;

export async function getCategoriesFn() {
  try {
    const res = await fetch(`${API_URL}/api/categoris-list`, {
      next: { revalidate: 10 },
    });
    const categoriesResponse = (await res.json()) as any;
    categoriesOptions = categoriesResponse.results.categoriesListOption;
  } catch (error) {
    console.error("Error fetching countries:", error);
    categoriesOptions = [];
  }
  return categoriesOptions;

  ///---
}
