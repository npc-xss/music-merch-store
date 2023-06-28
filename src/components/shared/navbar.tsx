"use client";

import Container from "../ui/container";
import CD from "public/images/cd.jpg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
// import { getAuthSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const userSignIn = () => {
    console.log("sign in button clicked");
    signIn("google");
    // signIn("google", { redirect: false });
  };

  const userSignOut = () => {
    console.log("sign out button clicked");
    signOut();
  };

  if (status === "authenticated") {
    router.push("/profile");
  }

  return (
    <Container>
      <nav className="mt-5 flex items-center justify-between">
        <Link
          className="bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text text-xl font-semibold text-transparent"
          href="/"
        >
          @<span className="underline-offset-4 hover:underline">eye-crown</span>{" "}
        </Link>

        {session ? (
          <Button onClick={userSignOut}>Sign Out</Button>
        ) : (
          <Dialog>
            <DialogTrigger className="inline-block h-10 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium transition hover:bg-violet-500/70 focus:outline-none focus:ring-2 focus:ring-purple-300">
              Sign in
            </DialogTrigger>

            <DialogContent className="max-w-sm">
              <Image
                className="mt-3 aspect-square rounded-2xl object-cover object-bottom "
                src={CD}
                placeholder="blur"
                alt="image of music cd"
              />

              <DialogHeader className="mt-5">
                <DialogTitle className="text-center text-3xl">
                  Welcome
                </DialogTitle>
                <DialogDescription className="text-center">
                  Click the button below to sign in
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 flex flex-col gap-5">
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
                <DialogDescription className="mb-3 text-center">
                  By signing in you agree to our{" "}
                  <span className="underline">
                    <Link href="">Terms of Service</Link>
                  </span>{" "}
                  and{" "}
                  <span className="underline">
                    <Link href="">Privacy Policy</Link>
                  </span>
                </DialogDescription>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </nav>
    </Container>
  );
}
