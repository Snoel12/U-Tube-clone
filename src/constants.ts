export const DEFAULT_LIMIT = 5;
// Crucial to modify in .env to production domain (including protocol)
export const APP_URL = process.env.VERCEL_URL || "http://localhost:3000";

export const THUMBNAIL_FALLBACK = "/placeholder.svg";
