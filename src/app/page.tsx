import Container from "@/components/ui/container";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";
import heroImage from "public/images/hero-transparent.png";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-10 flex flex-col items-center">
          <h1 className="mt-10 bg-gradient-to-b from-violet-600 via-violet-400 to-[#111111] bg-clip-text text-[12rem] font-black text-transparent">
            EYE CROWN
          </h1>

          <div className="flex w-full ">
            <div className="mt-44 w-1/3">
              <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates labore voluptatum tenetur odio voluptatem hic
                veritatis quo et repellat eligendi!
              </p>

              <Button className="mt-5 rounded-xl px-10 py-7" size={"lg"}>
                Shop Collection
                <span className="ml-2">
                  <ChevronRight size={23} />
                </span>
              </Button>
            </div>

            <Image
              className="ml-20 -translate-y-48"
              src={heroImage}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </Container>
    </>
  );
}
