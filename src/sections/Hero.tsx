import { motion, useReducedMotion } from "framer-motion";
import heroDoctor2 from "../assets/images/hero-doctor2.webp";

type Props = {
  onOpenContact: () => void;
};

const Hero = ({ onOpenContact }: Props) => {
  const reduceMotion = useReducedMotion();

  const slideIn = (fromX: number) => ({
    initial: reduceMotion ? false : { x: fromX, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 3, delay: 0.2, ease: "easeOut" as const },
  });

  return (
    <section
      id="home"
      className="
        min-h-[90vh]
        flex
        items-center
        bg-soft
        pt-28
        pb-16
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
          lg:gap-20
          items-center
          text-center
          md:text-left
        "
      >
        {/* Texto */}
        <motion.div {...slideIn(-200)}>
          <div className="flex justify-center md:justify-start">
            <span
              className="
                inline-flex
                items-center
                gap-3
                text-primary
                uppercase
                tracking-widest
                text-sm
                font-medium
              "
            >
              <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
              Medicina estética avanzada
            </span>
          </div>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-dark
              mt-5
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
              mb-10
              max-w-xl
              mx-auto
              md:mx-0
            "
          >
            Médico especializado en medicina estética, regenerativa y
            funcional. Tratamientos personalizados basados en evidencia
            científica y enfocados en potenciar tu belleza natural.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={onOpenContact}
              className="
                inline-flex
                justify-center
                bg-primary
                text-white
                font-medium
                px-8
                py-3.5
                rounded-full
                shadow-lg
                hover:bg-secondary
                transition
              "
            >
              Solicitar consulta
            </button>

            <a
              href="#about"
              className="
                inline-flex
                justify-center
                border
                border-primary
                text-primary
                font-medium
                px-8
                py-3.5
                rounded-full
                hover:bg-primary
                hover:text-white
                transition
              "
            >
              Conocé mi trayectoria
            </a>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          {...slideIn(200)}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px]">
            <img
              src={heroDoctor2}
              alt="Dr. Eduardo Argüello"
              width={800}
              height={1000}
              fetchPriority="high"
              className="
                relative
                w-full
                aspect-[4/5]
                object-cover
                object-[50%_15%]
                rounded-[32px]
                shadow-2xl
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;