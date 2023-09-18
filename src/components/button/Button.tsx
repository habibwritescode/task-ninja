import { ButtonProps } from "./types";

const variants = {
  primary: "bg-blue text-white",
  secondary: "bg-white border border-gray-300 text-gray-700",
};

const Button = ({
  variant = "secondary",
  children,
  height = "h-[40px]",
}: ButtonProps) => {
  const variantClasses = variants[variant];

  return (
    <button
      type="button"
      className={`flex items-center justify-center w-full min-w-max max-w-[176px] font-semibold rounded-lg px-[18px] py-[10px] ${variantClasses} ${height}`}
    >
      {children}
    </button>
  );
};

export default Button;
