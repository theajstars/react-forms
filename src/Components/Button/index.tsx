import { useRef, useState } from "react";

import { motion } from "framer-motion";

import ErrorIcon from "../../Assets/ErrorIcon.svg";

import "./style.scss";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  type?: "submit" | "button";

  label: string;
  icon?: "info" | "error" | "success";
  size?: "lg" | "md" | "sm";
  variant?: "outlined" | "filled";
  buttonStyle?: React.CSSProperties;
}

export default function Button({
  type = "button",
  label,
  icon,
  variant = "filled",
  size = "md",
  buttonStyle,
  ...restOfProps
}: ButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);
  return (
    <div className="button-container">
      <button {...restOfProps}>{label}</button>
      <motion.span
        initial={false}
        animate={{
          display: icon ? "" : "none",
        }}
      ></motion.span>
    </div>
  );
}
