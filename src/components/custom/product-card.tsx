import Image from "next/image";
import doondaTee from "public/images/donda-tee.png";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  imageSrc: string;
}

export default function ProductCard({
  title,
  category,
  price,
  imageSrc,
}: ProductCardProps) {
  return (
    <div className="mt-5 flex cursor-pointer items-center overflow-hidden  rounded-2xl border transition-all duration-500 hover:scale-105">
      <div className="w-full">
        <Image
          className="w-full"
          width={300}
          height={300}
          src={imageSrc}
          placeholder="blur"
          alt="product images"
        />

        <div className="flex items-end justify-between p-5">
          <div>
            <h1 className="text-xl">{title}</h1>
            <h2 className="text-neutral-500">{category}</h2>
            <h3 className="mt-5 text-xl ">Rs. {price}</h3>
          </div>

          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
