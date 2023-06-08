import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

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
        backgroundColor: "yellow",
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: {
            startColor: "black",
            endColor: "black",
          },
        },
      }
    );
  });

  return (
    <section id="portfolio" ref={sectionRef}>
      <div className="section-end" ref={section3end}></div>
    </section>
  );
};

export default Section3;
