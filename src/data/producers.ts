import labiosImg from "../assets/images/labios.jpg";
import narizImg from "../assets/images/nariz.jpg";
import ojerasImg from "../assets/images/ojeras.jpg";

export const producers = [
  {
    id: 1,
    title: "Aumento de Labios",
    slug: "aumento-labios",

    image:labiosImg,
    detailImage: labiosImg,

    description:
      "Perfilado e hidratación labial.",

    fullDescription:
      "Tratamiento realizado con ácido hialurónico para mejorar volumen, hidratación y definición de los labios.",

    benefits: [
      "Mayor volumen",
      "Mejor hidratación",
      "Contorno definido",
      "Resultado natural",
    ],

    duration: "8 a 12 meses",
  },

  {
    id: 2,
    title: "Rinomodelación",
    slug: "rinomodelacion",

    image: narizImg ,
    detailImage: narizImg,

    description:
      "Corrección estética sin cirugía.",

    fullDescription:
      "Permite armonizar el perfil nasal mediante la aplicación estratégica de ácido hialurónico.",

    benefits: [
      "Sin cirugía",
      "Resultado inmediato",
      "Procedimiento rápido",
      "Recuperación mínima",
    ],

    duration: "12 meses",
  },

  {
    id: 3,
    title: "Armonización Facial",
    slug: "armonizacion-facial",

    image: ojerasImg,
    detailImage: ojerasImg,

    description:
      "Equilibrio y proporción facial.",

    fullDescription:
      "Tratamiento integral enfocado en mejorar la armonía de los rasgos faciales respetando la naturalidad del paciente.",

    benefits: [
      "Mejora proporciones",
      "Resultados naturales",
      "Tratamiento personalizado",
      "Alta satisfacción",
    ],

    duration: "Variable según tratamiento",
  },
];