import Image from "next/image";
import { Button } from "@/components/ui/button";
import sweatShirt from "public/images/sweat-shirt.png";

interface CartItemsProps {
  size: string;
  colour: string;
  price: number;
}

export default function CartItems({ size, colour, price }: CartItemsProps) {
  return (
    <div className="grid grid-cols-5 rounded-xl border border-white/10 bg-neutral-800 px-4 py-4">
      <div className="col-span-2 flex flex-col items-center gap-5 md:flex-row">
        <Image
          className="rounded-xl"
          src={sweatShirt}
          width={100}
          height={100}
          alt="check out product images"
        />

        <div>
          <h1>Colour: {colour}</h1>
          <h1>Size: {size}</h1>
          <Button className="p-0 text-red-400" variant={"link"}>
            Remove
          </Button>
        </div>
      </div>

      <h1>Rs. {price}</h1>

      <input
        className="inline-block h-10 w-16 rounded-md bg-neutral-700 px-2 focus:outline-none focus:ring-2 focus:ring-violet-400 "
        type="number"
        min="1"
      />

      <h1>Rs. </h1>
    </div>
  );
}
