import Container from "@/components/ui/container";
import ProductCard from "@/components/custom/product-card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Music, Shirt } from "lucide-react";
import { products } from "@/constants/products";

export default function Home() {
  return (
    <Container>
      <div className="mt-28 flex items-center justify-center rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 p-10 md:justify-start lg:p-14">
        <div className="md:w-1/2">
          <div>
            <h1 className="bg-gradient-to-r from-amber-200 via-pink-300 to-pink-100 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl md:leading-[3.3rem]">
              Explore The New Eye Crown Merch
            </h1>
          </div>

          <div className="mt-5">
            <p className="leading-7">
              Fdipisicing ipsumds dolor sit amet consectetur adipisicing elit.
              Cluptates lorem tenetur odio voluptatem hic repellat eligendi!
              Lorem ipsum dolor sit amet.
            </p>

            <Button className="mt-5 w-full  rounded-xl md:w-1/2" size={"lg"}>
              Shop Collection
              <span className="ml-2">
                <ChevronRight size={23} />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <div className="gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                imageSrc={product.imageSrc}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
