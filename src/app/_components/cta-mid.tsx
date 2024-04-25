import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function CtaMid() {
  return (
    <Container
      isFullWidth
      className="h-[90vh] bg-secondary text-center text-secondary-foreground"
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-8">
        <div className="mb-2 text-8xl font-bold">
          Grow 10X faster, better, smarter
        </div>
        <p className="text-xl">
          Skip the guesswork, trial-and-error and forget the late nights
          guessing what&apos;ll click. And instead grow your business with
          proven client-getting-funnels, frameworks and{" "}
          <b>scientific customer acquisition</b> (not hopes and prayers).
        </p>
        <Button size={"xl"} className="text-4xl">
          Start Your FREE Growth Journey
        </Button>
      </div>
    </Container>
  );
}
