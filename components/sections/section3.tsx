import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

gsap.registerPlugin(ScrollTrigger);

const Section3 = ({ bgRef }: any) => {
  const backgroundRef = bgRef;
  const section3end = useRef(null);

  const sectionRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const sectionEnd = section3end.current;

    const section = sectionRef.current;

    gsap.fromTo(
      background,
      {},
      {
        background: "#fcd741",
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "black",
          //   endColor: "black",
          // },
        },
      }
    );
  });

  return (
    <section id="portfolio" ref={sectionRef}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        w="90%"
      >
        <Heading
          as="h2"
          color="black"
          textTransform="lowercase"
          textAlign="center"
          fontSize="4em"
        >
          Look at my work
        </Heading>
        <Grid templateColumns="auto auto auto auto auto" gap={4} my={12}>
          <GridItem>
            <Image
              src="/film-posters/garden-of-eden.jpg"
              alt="Garden of Eden"
            />
          </GridItem>

          <GridItem>
            <Image
              src="/film-posters/somnio-ergo-sum.jpg"
              alt="Somnio Ergo Sum"
            />
          </GridItem>

          <GridItem>
            <Image src="/film-posters/attached.jpg" alt="Attached" />
          </GridItem>

          <GridItem>
            <Image
              src="/film-posters/off-the-record.jpg"
              alt="Off the Record"
            />
          </GridItem>

          <GridItem>
            <Image
              src="/film-posters/send-me-an-angel.png"
              alt="Send me an Angel"
            />
          </GridItem>
        </Grid>
      </Box>
      <div className="section-end" ref={section3end}></div>
    </section>
  );
};

export default Section3;
