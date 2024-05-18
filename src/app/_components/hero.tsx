import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="mt-0 flex min-h-[90vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="rounded-full border bg-[#ebecff] p-4 text-center font-bold uppercase shadow-lg sm:text-lg">
          attention AGENCY OWNERS, COACHES & CONSULTANTS
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Build a Lead Gen Funnel <br className="hidden md:block" />
          That Converts Cold Traffic
        </h1>
        <div className="mt-3 max-w-4xl text-balance text-xl">
          Our 120-Day DWY Program helps you drive traffic, capture leads, and
          convert them into clients at scale—without needing any prior online
          presence, marketing experience, or complicated tech setups. All in
          just 1 hour a day.
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={"https://calendly.com/sasiogludogucan/discovery"}
            target="_blank"
          >
            <Button size={"xl"} className="mx-auto w-fit">
              Start Your 14-Day Free Trial
            </Button>
          </Link>
          <div className="text-center uppercase italic">
            Get 5 clients in 120 days or your money back.
          </div>
        </div>
        {/* <Image
          src="/groweasy-funnel.jpg"
          alt="GrowEasy Funnel"
          width={1200}
          height={800}
          className="mt-10 rounded-md"
        /> */}
      </div>
    </Container>
  );
}
