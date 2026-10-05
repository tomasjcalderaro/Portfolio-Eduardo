import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

type Props = {
  onOpenContact?: () => void;
};

const links = [
  { label: "Inicio", to: "/#home" },
  { label: "Sobre mí", to: "/#about" },
  { label: "Trayectoria", to: "/#trajectory" },
  { label: "Procedimientos", to: "/procedimientos" },
];

const linkClass = `
  relative
  text-white/80
  hover:text-white
  transition
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-px
  after:w-0
  after:bg-accent
  after:transition-all
  hover:after:w-full
`;

const Navbar = ({ onOpenContact }: Props) => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () => {
    onOpenContact?.();
    setOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-secondary
        transition-shadow duration-300
        ${scrolled ? "shadow-lg" : ""}
      `}
    >
      <div
        className={`
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "h-16" : "h-20"}
        `}
      >
        {/* Logo */}
        <Link to="/#home" className="block">
          <span className="block text-xl font-bold text-white font-serif">
            Dr. Eduardo Argüello
          </span>

          <span className="block text-xs tracking-widest uppercase text-accent">
            Medicina Estética
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`
                ${linkClass}
                ${
                  link.to === "/procedimientos" &&
                  pathname.startsWith("/procedimientos")
                    ? "text-white after:w-full"
                    : ""
                }
              `}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={handleContact}
            className="
              bg-accent
              text-secondary
              font-semibold
              px-5
              py-2
              rounded-full
              hover:brightness-110
              transition
            "
          >
            Solicitar consulta
          </button>

          {/* Acceso administrativo */}
          <Link
            to="/admin"
            aria-label="Acceso administrativo"
            title="Acceso administrativo"
            className="
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              border
              border-white/30
              text-white/80
              hover:bg-accent
              hover:text-secondary
              hover:border-accent
              transition
            "
          >
            <FaUser size={15} />
          </Link>
        </div>

        {/* Botón mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-secondary border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 gap-5 text-white">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-accent transition"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={handleContact}
              className="
                mt-2
                bg-accent
                text-secondary
                font-semibold
                py-3
                rounded-full
              "
            >
              Solicitar consulta
            </button>

            {/* Acceso administrativo */}
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-3
                text-white/70
                hover:text-accent
                transition
              "
            >
              <FaUser size={16} />
              <span>Acceso administrativo</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;