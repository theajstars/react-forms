import { useRef, useState } from "react";

import { motion } from "framer-motion";

import ErrorIcon from "../../Assets/ErrorIcon.svg";

import "./style.scss";

export interface TextFieldProps {
  type?: "text" | "password" | "number";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  errorMessage?: string;
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
  errorMessage,
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);
  return (
    <div className="textfield-container">
      {label && (
        <span
          className="label"
          onClick={() => {
            inputRef.current?.focus();
          }}
          style={labelStyle}
        >
          {label}
        </span>
      )}
      <motion.input
        initial={false}
        animate={{
          borderColor: error
            ? "#D44848"
            : animate
            ? "rgba(0, 77, 153, 0.7)"
            : inputStyle?.borderColor ?? "#DDDDDD",
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
      <span className="error-message">
        {error ? (
          errorMessage && (
            <div className="error-container">
              <img src={ErrorIcon} alt="" className="error-icon" />
              {errorMessage}
            </div>
          )
        ) : (
          <span>&nbsp;</span>
        )}
      </span>
    </div>
  );
}
