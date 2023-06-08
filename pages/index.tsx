import Section2 from "@/components/sections/section2";
import { Heading } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
  }, []);

  return (
    <>
      <div className="background" ref={bgRef}></div>

      <section>
        <Heading as="h1">Michal Špitálský</Heading>
      </section>

      <Section2 bgRef={bgRef} />
    </>
  );
}
