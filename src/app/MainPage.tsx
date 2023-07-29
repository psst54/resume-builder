/** @jsxImportSource @emotion/react */
"use client";
import react from "react";
import { color } from "@/app/styles";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  return <div>show resumes</div>;
}
