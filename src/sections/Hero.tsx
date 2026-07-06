import { motion } from "framer-motion";
import heroDoctor2 from "../assets/images/hero-doctor2.jpg";

type Props = {
  onOpenContact: () => void;
};

const Hero = ({ onOpenContact }: Props) => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        bg-soft
        pt-24
        px-6
        md:px-12
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-12
          items-center
          text-center
          md:text-left
        "
      >
        {/* Texto */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <span className="text-primary uppercase tracking-widest font-medium">
            Medicina Estética Avanzada
          </span>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-dark
              mt-4
              mb-6
              leading-tight
            "
          >
            Resultados naturales

            <span className="block text-primary">
              respaldados por experiencia
            </span>
          </h1>

          <p
            className="
              text-gray-600
              text-base
              md:text-lg
              leading-relaxed
              mb-8
            "
          >
            Médico especializado en medicina estética,
            regenerativa y funcional. Tratamientos
            personalizados basados en evidencia científica
            y enfocados en potenciar tu belleza natural.
          </p>

          <a
            href="#about"
            className="
              inline-flex
              bg-primary
              text-white
              px-6
              py-3
              rounded-xl
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Conocé mi trayectoria
          </a>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="flex justify-center"
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div
            className="
              bg-white
              p-3
              rounded-[32px]
              shadow-2xl
            "
          >
            <img
              src={heroDoctor2}
              alt="Dr. Eduardo Argüello"
              className="
                w-full
                max-w-[320px]
                sm:max-w-[400px]
                md:max-w-[500px]
                rounded-[24px]
                object-cover
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;