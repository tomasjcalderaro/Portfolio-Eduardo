import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  label?: string;
};

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

const Modal = ({ children, onClose, label = "Solicitar consulta" }: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Bloquea el scroll de la página de fondo
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Lleva el foco al diálogo
    dialog?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (e.key !== "Tab" || !dialog) return;

      // Mantiene el foco dentro del modal
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE)
      );

      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      // Devuelve el foco al botón que abrió el modal
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0
        z-[60]
        bg-black/50
        backdrop-blur-sm
        flex justify-center items-center
        p-4
      "
      onMouseDown={(e) => {
        // Solo cierra si se hace clic en el fondo, no al arrastrar texto
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className="
          relative
          bg-white
          rounded-2xl
          shadow-2xl
          w-full
          md:w-[600px]
          max-h-[90vh]
          overflow-y-auto
          p-6
          pt-12
          md:p-10
          outline-none
        "
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="
            absolute
            top-3
            right-3
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            text-gray-500
            hover:bg-gray-100
            hover:text-gray-700
            transition
          "
        >
          <span aria-hidden="true">✕</span>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;