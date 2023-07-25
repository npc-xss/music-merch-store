import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  imageSrc: any;
}

export default function ProductCard({
  title,
  category,
  price,
  imageSrc,
}: ProductCardProps) {
  const { addToCart } = useCart();
  // console.log(addToCart);
  return (
    <div className="mt-5 flex cursor-pointer items-center overflow-hidden  rounded-2xl border border-white/10 bg-neutral-800">
      <div className="h-full w-full bg-pattern bg-contain">
        <Image
          className="h-56 w-full object-cover"
          src={imageSrc}
          placeholder="blur"
          alt="product images"
        />

        <div className=" border-t border-white/10 p-5">
          <div className="items-end justify-between">
            <h1 className="truncate text-lg">{title}</h1>
            <h2 className="truncate text-neutral-500">{category}</h2>
            <h3 className="mt-2 truncate text-xl">Rs. {price}</h3>
          </div>

          <div>
            {/* <Button className="mt-5 w-full truncate rounded-xl bg-violet-500 font-normal text-white hover:bg-violet-400">
              Buy Now
            </Button> */}

            <Button
              className="mt-5 w-full truncate"
              onClick={() => addToCart(category, title, price, imageSrc)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
