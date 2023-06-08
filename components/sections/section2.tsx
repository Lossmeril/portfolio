import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Section2 = ({ bgRef }: any) => {
  const backgroundRef = bgRef;
  const section2end = useRef(null);

  const sectionRef = useRef(null);
  const sunRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const sectionEnd = section2end.current;

    const section = sectionRef.current;
    const sun = sunRef.current;

    // BACKGROUND FADE IN
    gsap.fromTo(
      background,
      {},
      {
        backgroundColor: "purple",
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: {
            startColor: "green",
            endColor: "cyan",
          },
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
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: {
            startColor: "green",
            endColor: "cyan",
          },
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
          markers: {
            startColor: "green",
            endColor: "cyan",
          },
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
          markers: {
            startColor: "green",
            endColor: "cyan",
          },
        },
      }
    );
  });

  return (
    <section id="send-me-an-angel" ref={sectionRef}>
      <div id="sun" ref={sunRef}></div>
      <div className="section-end" ref={section2end}></div>
    </section>
  );
};

export default Section2;
