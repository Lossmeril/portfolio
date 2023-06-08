import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MutableRefObject, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Section2 = ({ bgRef }: any) => {
  const sectionRef = useRef(null);
  const backgroundRef = bgRef;

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;

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
  }, []);

  return <section id="send-me-an-angel" ref={sectionRef}></section>;
};

export default Section2;
