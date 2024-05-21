"use client";

import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import Script from "next/script";

export default function Discovery() {
  return (
    <Container className="flex flex-col">
      <Header>Schedule A Call With Us</Header>
      <div className="h-full w-full">
        <iframe
          className="h-full w-full"
          src="https://api.leadconnectorhq.com/widget/booking/d6t17HJQjSla8aX9WSBI"
          scrolling="no"
          id="ljRv3jBP4E2gEIgeCN4i_1716283177570"
        ></iframe>
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          type="text/javascript"
        ></Script>
      </div>
    </Container>
  );
}
