"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/routing/dashboard")}>
        route me
      </button>
      'billing'
    </>
  );
}

// (user) is used just for organization
