"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";
import CD from "public/images/cd.jpg"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Navbar() {
  const session = useSession();

  const userSignIn = () => {
    console.log("sign in button clicked");
    signIn("google");
  };

  const userSignOut = () => {
    console.log("sign out button clicked");
    signOut();
  };

  return (
    <Container>
      <nav className="mt-5 flex items-center justify-between">
        <Link className="text-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-400 text-transparent bg-clip-text" href="/">
          @<span className="underline-offset-4 hover:underline ">eye-crown</span>
        </Link>

        {!session ? (
          <Button onClick={userSignOut}>Sign Out</Button>
        ) : (
          <Dialog>
            <DialogTrigger className="inline-block h-10 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium transition hover:bg-violet-500/70 focus:outline-none focus:ring-2 focus:ring-purple-300">
              Sign in
            </DialogTrigger>

            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle className="text-center text-3xl">
                  Welcome
                </DialogTitle>
                <DialogDescription className="text-center">
                  Click the button below to sign in
                </DialogDescription>
              </DialogHeader>

              <Image className="aspect-square saturate-50 max-h-60 w-full rounded-xl object-cover object-bottom" src={CD} placeholder="blur" alt="image of music cd" />

              <div className="mt-5 flex flex-col gap-5">
                <Button
                  className="w-full"
                  variant={"secondary"}
                  type="submit"
                  onClick={userSignIn}
                >
                  <div className="flex items-center gap-2">
                    <img className="h-6 w-6" src="/logos/google.svg" alt="" />
                    <span>Continue with Google</span>
                  </div>
                </Button>

                {/* <Button className="w-full" variant={"secondary"} type="submit">
                  Continue with Facebook
                </Button> */}
              </div>

              <DialogFooter>
                <DialogDescription className="text-center ">
                  By signing in you agree to our <span className="underline"><Link href="">Terms of Service</Link></span> and <span className="underline"><Link href="">Privacy Policy</Link></span>
                </DialogDescription>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </nav>
    </Container>
  );
}
