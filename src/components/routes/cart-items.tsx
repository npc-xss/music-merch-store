import Image from "next/image";
import sweatShirt from "public/images/sweat-shirt.png";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export default function CartItems() {
  const { items, removeFromCart } = useCart();
  console.log(items);

  function handleRemoveItem() {
    removeFromCart(items[0]);
  }

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-5 rounded-xl border border-white/10 bg-neutral-800 p-4"
          >
            <div className="col-span-2 flex items-start gap-5">
              <Image
                className="rounded-xl"
                src={item.imageSrc}
                width={100}
                height={100}
                placeholder="blur"
                alt="check out product images"
              />

              <div className="flex h-full flex-col items-start justify-between">
                <div>
                  <h1>Category: {item.category}</h1>
                  {/* <h1>Title: {item.title}</h1> */}
                  <h1>Colour: {item.title}</h1>
                  <h1>Size: {"M"}</h1>
                </div>

                <Button
                  className="h-6 p-0 text-red-400"
                  variant={"link"}
                  onClick={handleRemoveItem}
                >
                  Remove
                </Button>
              </div>
            </div>

            <input
              className="inline-block h-1/2 w-16 rounded-md bg-neutral-700 px-2 text-center focus:outline-none focus:ring-2 focus:ring-violet-400"
              type="number"
              min="1"
              defaultValue={1}
            />

            <h1>Rs. {item.price}</h1>
            <h1>Rs. 2000</h1>
          </div>
        );
      })}
    </>
  );
}
