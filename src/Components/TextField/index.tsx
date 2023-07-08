import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./style.scss";

export interface TextFieldProps {
  type?: "text" | "password" | "number";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  size?: "lg" | "md" | "sm";
  showBorder?: boolean;
  spellCheck?: boolean;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

export default function TextField({
  type = "text",
  value,
  onChange,
  label,
  placeholder,
  error,
  showBorder = true,
  spellCheck = true,
  size = "md",
  inputStyle,
  labelStyle,
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);
  return (
    <div className="container">
      <span
        className="label"
        onClick={() => {
          inputRef.current?.focus();
        }}
        style={labelStyle}
      >
        {label}
      </span>
      <motion.input
        initial={false}
        animate={{
          borderColor: animate ? "rgba(0, 77, 153, 0.7)" : "rgba(0, 0, 0, 1)",
        }}
        ref={inputRef}
        onFocus={() => {
          setAnimate(true);
        }}
        onBlur={() => {
          setAnimate(false);
        }}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`input input-${size} ${
          error ? "input-error" : ""
        } border-${showBorder}`}
        spellCheck={spellCheck}
        style={inputStyle}
      />
    </div>
  );
}
