import { ButtonProps } from "@/types/buttons.t";
import { cva } from "class-variance-authority";
const btnStyle = cva(
  `
  bg-gray-100 text-slate-500
dark:bg-white/5 dark:text-white rounded-full
    only-icon items-center
    `,
  {
    variants: {
      size: {
        md: "button-md",
        lg: "button-lg",
        xl: "button-xl",
        xxl: "button-2xl",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);
const  Button = ({
  children,
  className = "",
  size = "lg",
  ...props
}: ButtonProps)=> {
  return (
    <button className={btnStyle({ size, className })} {...props}>
      {children}
    </button>
  );
}

export default Button;
