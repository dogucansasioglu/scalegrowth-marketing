import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="mt-0 flex min-h-[80vh] items-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="rounded-full border bg-[#ebecff] p-4 text-center font-bold uppercase shadow-lg sm:text-lg">
          You&apos;re Booked!
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Get Ready to <br className="hidden md:block" /> Transform Your
          Business
        </h1>
        <div className="mt-3 max-w-4xl text-balance text-xl">
          Thanks for scheduling a call! While you wait, join our free Skool
          community. Connect with agency owners, coaches & consultants and
          access exclusive trainings.
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
