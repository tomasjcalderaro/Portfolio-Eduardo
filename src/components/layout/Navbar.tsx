import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

type Props = {
  onOpenContact?: () => void;
};

const Navbar = ({ onOpenContact }: Props) => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#062F2C] shadow-lg">

      {/* Navbar principal */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <Link
          to="/"
          className="block"
        >
          <h1 className="text-xl font-bold text-white">
            Dr. Eduardo Argüello
          </h1>

          <p className="text-xs text-white/70">
            Medicina Estética
          </p>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-white">

          {isHome ? (
            <a
              href="#home"
              className="hover:text-primary transition"
            >
              Inicio
            </a>
          ) : (
            <Link
              to="/"
              className="hover:text-primary transition"
            >
              Inicio
            </Link>
          )}

          <Link
            to="/procedimientos"
            className="hover:text-primary transition"
          >
            Procedimientos
          </Link>

          <button
            onClick={() => onOpenContact?.()}
            className="hover:text-primary transition"
          >
            Contacto
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
              text-white
              hover:bg-primary
              hover:border-primary
              transition
            "
          >
            <FaUser size={15} />
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label={
            open
              ? "Cerrar menú"
              : "Abrir menú"
          }
        >
          {open ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            bg-[#062F2C]
            border-t
            border-white/10
          "
        >

          <div
            className="
              flex
              flex-col
              px-6
              py-6
              gap-6
              text-white
            "
          >

            {isHome ? (
              <a
                href="#home"
                onClick={() => setOpen(false)}
              >
                Inicio
              </a>
            ) : (
              <Link
                to="/"
                onClick={() => setOpen(false)}
              >
                Inicio
              </Link>
            )}

            <Link
              to="/procedimientos"
              onClick={() => setOpen(false)}
            >
              Procedimientos
            </Link>

            <button
              onClick={() => {
                onOpenContact?.();
                setOpen(false);
              }}
              className="text-left"
            >
              Contacto
            </button>

            {/* Acceso administrativo mobile */}
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
              "
            >
              <FaUser size={16} />

              <span>
                Acceso administrativo
              </span>
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;