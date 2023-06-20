import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mhbdrnclkuntwqlkxwro.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYmRybmNsa3VudHdxbGt4d3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyNzAyNjgsImV4cCI6MjAwMjg0NjI2OH0.jDeWYVFp54D3JmRElEHtaIlHzFdQLfzbWif3XJabfYU";
export const supabase = createClient(supabaseUrl, supabaseKey);
