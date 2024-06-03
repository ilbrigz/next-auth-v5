import { auth } from "@/auth";
import { NextResponse } from "next/server";

// how to make a simple route to get authenticated user
export const GET = auth(async ({ auth }) => {
  console.log("calling whoami");
  return NextResponse.json({ user: auth?.user?.name });
});
