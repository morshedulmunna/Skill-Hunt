export const generateSearchQueryUrl = (searchParams: Record<string, any>) => {
  const searchParamsObj = new URLSearchParams();

  console.log(searchParams);

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParamsObj.append(key, String(value));
    }
  });

  return `${searchParamsObj.toString()}`;
};
