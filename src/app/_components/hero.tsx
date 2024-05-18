import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <Container className="mt-[15vh] flex min-h-[90vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="rounded-full border bg-[#ebecff] p-4 text-center text-xl font-bold shadow-lg">
          120-Day DWY Program
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Build a Lead Gen Funnel <br className="hidden md:block" />
          That Converts Cold Traffic
        </h1>
        <div className="mt-3 max-w-4xl text-2xl">
          We help coaches, consultants, and agency owners drive traffic, capture
          leads, and convert them at scale—without needing any prior online
          presence, marketing experience, or complicated tech setups. All in
          just 1 hour a day.
        </div>
        <div className="flex flex-col gap-2">
          <Button size={"xl"} className="mx-auto w-fit">
            Try It For FREE
          </Button>
          <div className="text-center italic">with a 14-day free trial</div>
        </div>
        <Image
          src="/groweasy-funnel.jpg"
          alt="GrowEasy Funnel"
          width={1200}
          height={800}
          className="mt-10 rounded-md"
        />
      </div>
    </Container>
  );
}
