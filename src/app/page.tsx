// import { auth } from "@/auth";
"use client";

import { useSession } from "next-auth/react";

import AuthButton from "./AuthButton.client";

export default function Home() {
  // const session = await auth();
  const session = useSession();
  return (
    <main>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
