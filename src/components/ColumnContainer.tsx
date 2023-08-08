"use client";
import { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Column } from "@/components";
import useDimension from "@/hooks/useDimension";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
];

const ColumnContainer: React.FC = () => {
  const columnContainer = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: columnContainer,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={columnContainer}
      className="bg-slate-950 h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden"
    >
      <Column y={y} images={[images[0], images[1], images[2]]} />
      <Column y={y2} images={[images[3], images[4], images[5]]} />
      <Column y={y3} images={[images[6], images[7], images[8]]} />
      <Column y={y4} images={[images[9], images[10], images[11]]} />
    </div>
  );
};
export default ColumnContainer;
