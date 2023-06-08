import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const text = textRef.current;

    gsap.fromTo(
      img,
      { x: 0 },
      {
        x: 1000,
        duration: 3,
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: {
            startColor: "fuchsia",
            endColor: "purple",
          },
        },
      }
    );
    gsap.fromTo(
      text,
      { x: 0 },
      {
        x: 1000,
        duration: 3,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: {
            startColor: "fuchsia",
            endColor: "purple",
          },
        },
      }
    );
  }, []);

  return (
    <>
      <div className="spacer"></div>
      <h1 ref={textRef}>Hello</h1>
      <div className="spacer"></div>
      <img src="Amelia.png" ref={imgRef} />
    </>
  );
}
