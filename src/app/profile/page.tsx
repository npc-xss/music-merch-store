"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  const userSignOut = () => {
    console.log("sign out button clicked");
  };
  return (
    <div>
      <Button className="mt-5" onClick={userSignOut}>
        Sign Out
      </Button>
    </div>
  );
}
