import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="mt-0 flex min-h-[80vh] items-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="rounded-full border bg-[#ebecff] p-4 text-center font-bold uppercase shadow-lg sm:text-lg">
          You&apos;re All Set!
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Get More With Skool
        </h1>
        <div className="mt-3 max-w-4xl text-balance text-xl">
          Thanks for signing up! Your trainings are on the way. Join our free
          Skool community to access exclusive content, get expert support, and{" "}
          <b>book a free 1-1 discovery call to achieve your goals faster.</b>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={"https://www.skool.com/groweasy-7508"} target="_blank">
            <Button size={"xl"} className="mx-auto w-fit">
              Join the Free Skool Community Now
            </Button>
          </Link>
          <div className="text-center italic">Free to join.</div>
        </div>
      </div>
    </Container>
  );
}
