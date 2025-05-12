import React from "react";

type ButtonProps = {
  variant?: "joinUs" | "learnMore" | "login";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "joinUs",
  children,
  onClick,
  disabled = false,
  className,
}) => {
  const baseStyles = "py-2 px-4 rounded font-medium";

  const variantStyles = {
    joinUs:
      "w-52 h-16 py-5 bg-white border-2 border-transparent rounded-2xl justify-center items-center gap-2.5 inline-flex text-BgColor font-semibold text-lg hover:text-white hover:border-white transition duration-500 hover:bg-transparent",
    learnMore:
      "w-52 h-16  py-5 rounded-2xl border-2 border-white justify-center items-center gap-2.5 inline-flex text-white hover:bg-white hover:text-BgColor transition duration-500",
    login:
      "w-32 h-12  py-5 rounded-2xl border-2 border-white justify-center items-center gap-2.5 inline-flex text-white hover:bg-white hover:text-BgColor transition duration-500",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;