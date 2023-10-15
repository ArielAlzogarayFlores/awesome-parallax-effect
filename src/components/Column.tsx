"use client";
import { MotionValue, motion } from "framer-motion";
import Image from "next/image";

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="var-position w-1/4 h-full relative flex flex-col gap-[2vw] min-w-[250px]"
    >
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="w-full h-full relative rounded-[1vw] overflow-hidden"
          >
            <Image
              src={image}
              alt="text-pic"
              fill
              className="object-cover"
              quality={100}
              priority={true}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
export default Column;
