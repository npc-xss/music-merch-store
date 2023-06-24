"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const userSignIn = () => {
    console.log("sign in button clicked");
  };

  return (
    <main className="mx-auto max-w-7xl px-5">
      <p className="mt-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta cum
        fuga fugiat maiores molestias repellendus? Laudantium ab suscipit amet
        vitae repudiandae dolor, tenetur, veniam ducimus delectus dignissimos,
        beatae voluptatibus accusamus expedita iusto commodi sequi. Consequatur
        libero totam rem. Vel fuga, illo nihil atque aliquam magni blanditiis in
        temporibus inventore! Aliquam.
      </p>

      <Button className="mt-5" onClick={userSignIn}>
        Sign in with Google
      </Button>
    </main>
  );
}
