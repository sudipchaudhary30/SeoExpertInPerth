import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;

// Prevent static export of dynamic API route (not supported on GitHub Pages)
export async function generateStaticParams() {
  return [];
}
