import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Stars = () => {
  const count = Array<Number>(50);
  const width = window.innerWidth;
  const height = window.innerHeight;

  return <Image src="star-solid.svg" alt="" />;
};

const Section2 = ({ bgRef }: any) => {
  const backgroundRef = bgRef;
  const section2end = useRef(null);

  const sectionRef = useRef(null);
  const sunRef = useRef(null);
  const skyRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const sectionEnd = section2end.current;

    const section = sectionRef.current;
    const sun = sunRef.current;
    const sky = skyRef.current;

    // BACKGROUND FADE IN
    gsap.fromTo(
      background,
      {},
      {
        background: "#5d1969",
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "red",
          //   endColor: "red",
          // },
        },
      }
    );

    // FADE IN SKY
    gsap.fromTo(
      sky,
      {},
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "red",
          //   endColor: "red",
          // },
        },
      }
    );

    // FADE IN SUN
    gsap.fromTo(
      sun,
      { y: 500, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "green",
          //   endColor: "green",
          // },
        },
      }
    );

    // SCALE SUN AS A TRANSITION TO A NEW SECTION
    gsap.fromTo(
      sun,
      { scale: 1 },
      {
        scale: 5,
        position: "fixed",

        scrollTrigger: {
          trigger: sectionEnd,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "orange",
          //   endColor: "orange",
          // },
        },
      }
    );

    // HIDE SUN AFTER INITIATING NEW SECTION
    gsap.fromTo(
      sun,
      {},
      {
        opacity: 0,

        scrollTrigger: {
          trigger: sectionEnd,
          start: "top 10%",
          end: "top 0%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "cyan",
          //   endColor: "cyan",
          // },
        },
      }
    );

    // HIDE SKY AFTER INITIATING NEW SECTION
    gsap.fromTo(
      sky,
      {},
      {
        opacity: 0,

        scrollTrigger: {
          trigger: sectionEnd,
          start: "top 10%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "cyan",
          //   endColor: "cyan",
          // },
        },
      }
    );
  });

  return (
    <section id="send-me-an-angel" ref={sectionRef}>
      <Box className="section-content">
        <Grid templateColumns="repeat(2,1fr)" gap="64px" className="grid">
          <GridItem></GridItem>
          <GridItem>
            <Image
              className="laurel"
              src="/laurels/swiff-2023.png"
              alt="Student World Impact Film Festival 2023 Finalist"
            />
            <Image
              className="laurel"
              src="/laurels/but-2023.png"
              alt="B-Movie, Underground and Trash Film Festival 2023 official selection"
            />
          </GridItem>
        </Grid>
      </Box>
      <div id="sun" ref={sunRef}></div>
      <div id="section-2-sky" ref={skyRef}>
        {/* <Stars /> */}
      </div>
      <div className="section-end" ref={section2end}></div>
    </section>
  );
};

export default Section2;
