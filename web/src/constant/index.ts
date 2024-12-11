export const API_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3001";

export const accountType = {
  EMPLOYEE: "employee",
  RECRUITER: "recruiter",
};
