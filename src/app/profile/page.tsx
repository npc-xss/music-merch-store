"use client";

import {signOut, useSession} from "next-auth/react"
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";


export default function Page() {
  const session = useSession(); 

  const userSignOut = () => {
    console.log("sign out button clicked");
    signOut()
  };

  return (
    <Container>
      <div className="mt-5 flex items-center justify-between">
        <h1>{session?.data?.user?.name}</h1>

        <div>
          <Button onClick={userSignOut}>Sign Out</Button>
        </div>
      </div>
    </Container>
  );
}
