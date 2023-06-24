"use client";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Page() {
  const userSignOut = () => {
    console.log("sign out button clicked");
  };
  return (
    <Container>
      <div className="mt-5 flex items-center justify-between">
        <h1>Username</h1>

        <div>
          <Button onClick={userSignOut}>Sign Out</Button>
        </div>
      </div>
    </Container>
  );
}
