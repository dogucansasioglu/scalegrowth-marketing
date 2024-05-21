import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="mt-0 flex min-h-[80vh] items-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="rounded-full border bg-[#ebecff] p-4 text-center font-bold uppercase shadow-lg sm:text-lg">
          Attention AGENCY OWNERS, COACHES & CONSULTANTS
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Turn Cold Traffic Into <br /> High-Paying Clients
        </h1>
        <div className="mt-3 max-w-4xl text-balance text-xl">
          Drive traffic, capture leads, and convert them into high-paying
          clients with our 120-Day DWY Program. No prior online presence,
          marketing experience, or tech skills needed.{" "}
          <b>All in just 1 hour a day.</b>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={"/discovery"}>
            <Button size={"xl"} className="mx-auto w-fit">
              Start Your 14-Day Free Trial Now
            </Button>
          </Link>
          <div className="text-center italic">
            Get 5 clients in 120 days or your money back.
          </div>
        </div>
      </div>
    </Container>
  );
}
