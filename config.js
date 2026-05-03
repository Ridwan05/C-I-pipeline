export const SUPABASE_URL = import.meta.env.SUPABASE_URL;
export const SUPABASE_KEY = import.meta.env.SUPABASE_ANON_KEY;
export const HEADERS = {
  "Content-Type": "application/json",
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
};
