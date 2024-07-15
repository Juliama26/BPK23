import {Carousel} from "@material-tailwind/react";
import {motion} from "framer-motion";

export default function Branda_() {
  const images = [
    "/image/tugu-jepang.jpg",
    "/image/rumah-kaki-seribu.jpg",
    // "/image/logo.png",
    "/image/noken.jpg",
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row md:py-16 md:justify-around px-3 bg-gradient-to-br from-100 to-50">
      <motion.div
        className="max-w-lg py-10"
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.8}}>
        <h1 className="text-3xl md:text-5xl font-bold text-950">
          Merangkai Sejarah, Menggapai Masa Depan
        </h1>
        <p className="text-lg md:text-2xl py-5 text-900">
          Dengan kekayaan budaya Papua, kami mengajak Anda untuk bersama-sama
          menjaga dan menghidupkan warisan berharga ini demi generasi mendatang.
        </p>
      </motion.div>
      <Carousel
        loop={true}
        autoplay={true}
        className="-mt-10 md:w-1/2 md:mt-5 ">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Warisan Budaya Papua"
            className="flex flex-col justify-center h-52 pl-28 md:h-80"
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: index * 0.2}}
          />
        ))}
      </Carousel>
    </section>
  );
}
