"use client";

import Container from "@/components/ui/container";
import Navbar from "@/components/shared/navbar";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-5 flex items-center justify-between">
          <h1>{session?.user?.name}</h1>
        </div>
      </Container>
    </>
  );
}
