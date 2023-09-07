"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  category: string;
  title: string;
  price: number;
  image: any;
}

export default function ProductCard({
  category,
  title,
  price,
  image,
}: ProductCardProps) {
  const { items, addToCart } = useCart();
  const { toast } = useToast();

  function handleAddToCart() {
    addToCart({ category, title, price, image });
    console.log(items);
  }

  return (
    <div className="mt-5 flex cursor-pointer items-center overflow-hidden  rounded-2xl bg-neutral-800 transition-all duration-500 hover:-translate-y-2 focus:translate-x-0 active:translate-y-2">
      <div className="h-full w-full bg-pattern bg-contain">
        <Image
          className="h-56 w-full object-cover"
          src={image}
          placeholder="blur"
          alt="product images"
        />

        <div className=" border-t border-white/10 p-5">
          <div className="items-end justify-between">
            <h1 className="truncate text-neutral-500">{category}</h1>
            <h2 className="truncate text-lg">{title}</h2>
            <h3 className="mt-2 truncate text-xl">Rs. {price}</h3>
          </div>

          <div>
            {/* <Button className="mt-5 w-full truncate rounded-xl bg-violet-500 font-normal text-white hover:bg-violet-400">
              Buy Now
            </Button> */}

            <Button className="mt-5 w-full truncate" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
