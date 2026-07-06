import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {
  onOpenContact?: () => void;
};

const Navbar = ({ onOpenContact }: Props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  return (
    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        bg-[#062F2C]/95
        backdrop-blur-md
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

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

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
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
          <div className="flex flex-col px-6 py-6 gap-6 text-white">

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

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;