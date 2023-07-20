"use client";

import Container from "@/components/ui/container";
import Navbar from "@/components/shared/navbar";
import { useSession } from "next-auth/react";
import CartItems from "@/components/custom/cart-items";
import { Button } from "@/components/ui/button";

export default function Page() {
  // const { data: session } = useSession();

  return (
    <>
      <Container className="min-h-screen">
        {/* <h1>{session?.user?.name}</h1> */}
        <div className="mt-20">
          <h1 className="text-3xl font-semibold">Your Cart</h1>
          <div className="mt-5 grid w-full grid-cols-5 rounded-xl p-5">
            <h1 className="col-span-2 mt-2">Product</h1>
            <h1 className="mt-2">Quantity</h1>
            <h1 className="mt-2">Price</h1>
            <h1 className="mt-2">Total</h1>
          </div>

          <div className="space-y-5">
            <CartItems colour="Blue" price={2000} size="M" />
            <CartItems colour="White" price={1500} size="M" />
          </div>
        </div>

        <div className="mt-5 md:grid md:grid-cols-5">
          <div className="col-span-4" />
          <div className="col-span-1">
            <h1>Sub Total: Rs. </h1>
            <Button className="mt-5 w-full">Check Out</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
