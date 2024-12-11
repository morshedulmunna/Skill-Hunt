import Cookies from "js-cookie";
export const isBrowser = typeof window !== "undefined";

export const generateSearchQueryUrl = (searchParams: Record<string, any>) => {
  const searchParamsObj = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParamsObj.append(key, String(value));
    }
  });

  return `${searchParamsObj.toString()}`;
};

export function getFromLocalStorage<T>(key: string): T | null {
  if (!isBrowser) return null;
  const value = localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }
  return null;
}

export function setInLocalStorage(key: string, value: unknown): void {
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function removeFromLocalStorage(key: string): void {
  if (isBrowser) {
    localStorage.removeItem(key);
  }
}

export function clearLocalStorage(): void {
  if (isBrowser) {
    localStorage.clear();
  }
}

export function saveInCookies(key: string, value: string): void {
  Cookies.set(key, value);
}

export function getFromCookies(key: string): string | undefined {
  return Cookies.get(key);
}

export function removeFromCookies(key: string): void {
  Cookies.remove(key);
}

export function capitalizeFirstLetter(str: string): string {
  if (typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isImage(filename: string): boolean {
  if (typeof filename !== "string") return false;
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "jfif"];
  const fileExtension = filename.split(".").pop()?.toLowerCase() || "";
  return imageExtensions.includes(fileExtension);
}

export function isVideo(filename: string): boolean {
  if (typeof filename !== "string") return false;
  const videoExtensions = ["mp4", "avi", "mov", "wmv", "mkv"];
  const fileExtension = filename.split(".").pop()?.toLowerCase() || "";
  return videoExtensions.includes(fileExtension);
}

export function deleteAllCookies(): void {
  const cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
}

export async function blobURLtoFile(
  blobURL: string,
  fileName: string,
  fileType: string
): Promise<File> {
  try {
    const response = await fetch(blobURL);
    const blobData = await response.blob();
    return new File([blobData], fileName, { type: fileType });
  } catch (error) {
    console.error("Error converting Blob URL to File:", error);
    throw error;
  }
}

export function isNumber(value: unknown): boolean {
  return typeof value === "number";
}
