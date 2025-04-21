import { useState } from "react";

function HamburgerToggle({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center w-10 h-10 group"
    >
      <span
        className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}

export default HamburgerToggle;
