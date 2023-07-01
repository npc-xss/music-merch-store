import Container from "@/components/ui/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/custom/product-card";
import doondaTee from "public/images/donda-tee.png";
import hoodie from "public/images/hoodie.png";
import surveySweatShirt from "public/images/survey-sweat-shirt.png";
import sweatShirt from "public/images/sweat-shirt.png";
import loremTee from "public/images/lorem-tee.png";
import eyeCrownLogo from "public/images/eye-crown-logo.svg";

export default function Home() {
  return (
    <Container>
      <div className="mt-20 h-[50rem] items-center gap-10 md:flex md:h-[37rem]">
        <div className="md:w-1/2">
          <div>
            <h1 className="bg-gradient-to-b from-violet-500 via-violet-400 to-violet-300 bg-clip-text text-5xl font-extrabold leading-[3.3rem] text-transparent">
              Explore The New Eye Crown Merch
            </h1>
          </div>

          <div className="mt-10">
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

        <div className="flex flex-1 justify-center md:justify-end lg:flex">
          <Image
            className="mt-5 "
            src={eyeCrownLogo}
            width={400}
            height={400}
            alt="eye crown logo"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Featured Products</h1>

        <div className="gap-10 md:flex">
          <ProductCard
            title="White"
            category="Tee"
            price={2000}
            imageSrc={doondaTee}
          />
          <ProductCard
            title="Brown"
            category="Hoodie"
            price={2000}
            imageSrc={hoodie}
          />
          <ProductCard
            title="Tan"
            category="Sweat Shirt"
            price={2000}
            imageSrc={surveySweatShirt}
          />
          <ProductCard
            title="Dark Blue"
            category="Sweat Shirt"
            price={2000}
            imageSrc={sweatShirt}
          />{" "}
        </div>

        <div className="mt-10 gap-10 md:flex">
          <ProductCard
            title="White"
            category="Tee"
            price={2000}
            imageSrc={doondaTee}
          />
          <ProductCard
            title="Brown"
            category="Hoodie"
            price={2000}
            imageSrc={hoodie}
          />
          <ProductCard
            title="Tan"
            category="Sweat Shirt"
            price={2000}
            imageSrc={surveySweatShirt}
          />
          <ProductCard
            title="Dark Blue"
            category="Sweat Shirt"
            price={2000}
            imageSrc={sweatShirt}
          />{" "}
        </div>
      </div>
    </Container>
  );
}
