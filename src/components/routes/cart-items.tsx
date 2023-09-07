import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import whiteTee from "public/images/white-tee.png";

export default function CartItems() {
  return (
    <>
      <div className="rounded-xl border border-white/10 bg-neutral-800 p-4">
        <div className="flex gap-5">
          <Image
            className="rounded-xl"
            src={whiteTee}
            width={100}
            height={100}
            placeholder="blur"
            alt="check out product images"
          />

          <div className="flex flex-1 justify-between">
            <div className="w-1/2 grid-cols-2 items-center gap-5 md:flex md:w-1/3">
              <div>
                <h1 className="text-lg">Category</h1>
                <h1 className="font-semibold text-neutral-400">Title</h1>
              </div>

              <input
                className="mt-2 w-20 rounded-md bg-neutral-700 px-2 py-2 text-center focus:outline-none focus:ring-2 focus:ring-violet-400 md:py-3"
                type="number"
                min="1"
                defaultValue="1"
              />
            </div>

            <div className="flex flex-col items-end justify-evenly">
              <Button
                className="p-0 text-red-400 hover:text-red-500"
                variant={"link"}
              >
                <Trash2 />
              </Button>

              <h1 className="text-xl font-semibold">Rs. 1000</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
