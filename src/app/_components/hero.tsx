import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <Container className="my-0 flex min-h-[90vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-4xl lg:max-w-6xl lg:text-5xl xl:max-w-7xl xl:text-6xl">
          Close 2-10 New Clients In The Next 90 Days{" "}
          <br className="hidden md:block" />
          With Your B2B Business
          <br className="hidden md:block" /> GUARANTEED (Or You Don&apos;t Pay)
        </h1>
        <div className="text-2xl">
          (Without Losing Money on Ads, Needing Any Prior Online Presence, and
          Long-Term Contracts)
        </div>
        <div className="flex flex-col gap-2">
          <Button size={"xl"} className="mx-auto w-fit">
            Schedule Your FREE Growth Call
          </Button>
          <div className="text-center">
            Secure Your Spot Now—Limited Spots Available!
          </div>
        </div>
      </div>
    </Container>
  );
}
