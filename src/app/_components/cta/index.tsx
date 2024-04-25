import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="bg-primary py-32">
      <Container className="flex flex-col gap-20">
        <Header>Do You Want To Scale Your Business?</Header>
        <Button variant={"accent"} size={"xl"} className="mx-auto w-fit ">
          Schedule Your FREE Growth Call
        </Button>
      </Container>
    </div>
  );
}
