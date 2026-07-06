type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <div
      className="
        fixed inset-0
        bg-black/50
        flex justify-center items-center
        z-50
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-[90%]
          md:w-[600px]
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            text-gray-500
          "
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;