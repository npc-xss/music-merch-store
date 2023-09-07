import Container from "@/components/ui/container";
import Link from "next/link";
import ProductCard from "@/components/routes/product-card";
import CategoryTabs from "../components/routes/category-tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileVolume, HomeIcon, Music, Shirt } from "lucide-react";
import { merch } from "@/constants/merch";

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-center rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 p-8 md:justify-start lg:p-14">
        <div className="md:w-1/2">
          <div>
            <h1 className="bg-gradient-to-r from-amber-200 via-pink-300 to-pink-100 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl md:leading-[3.3rem]">
              Explore The New Merch Drop
            </h1>
          </div>

          <div className="mt-5">
            <p className="leading-7">
              Acimisic ipsumds dolor sit amet consectetur adipisicing elit.
              Cluptates lorem tenetur odio voluptatem hic repellat eligendi!
              Lorem ipsum dolor sit amet.
            </p>

            {/* <Button className="mt-5 w-full md:w-1/2" size={"lg"}>
              Shop Collection
              <span className="ml-2">
                <ChevronRight size={23} />
              </span>
            </Button> */}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
        <Link href="#">
          <CategoryTabs category="All" icon={<HomeIcon />} />
        </Link>
        <Link href="#">
          <CategoryTabs category="Merch" icon={<Shirt />} />
        </Link>
        <Link href="#">
          <CategoryTabs
            className="cursor-not-allowed"
            category="Albums"
            icon={<Music />}
          />
        </Link>
        <Link href="#">
          <CategoryTabs
            className="cursor-not-allowed"
            category="Beats"
            icon={<FileVolume />}
          />
        </Link>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Merch</h1>
        <div className="gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {merch.map((element) => {
            return (
              <ProductCard
                key={element.id}
                category={element.category}
                title={element.title}
                price={element.price}
                image={element.image}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
