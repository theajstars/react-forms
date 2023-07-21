import { useRef, useState } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

export interface TextFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  value?: any;
  error?: boolean;
  spellCheck?: boolean;
  type?: "text" | "number" | "password" | "search";
  inputSize?: "lg" | "md" | "sm";
  showBorder?: boolean;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  classNameList?: string[];
}

export default function TextField({
  onChange,
  label,
  error,
  value,
  showBorder = true,
  inputSize = "md",
  inputStyle,
  labelStyle,
  type = "text",
  errorMessage,
  classNameList,
  spellCheck = false,
  placeholder,
}: Omit<TextFieldProps, "className">) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);

  const classes = classNameList ? classNameList.join(" ") : "";

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
        value={value}
        type={type}
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
        onChange={onChange}
        placeholder={placeholder ?? ""}
        className={`input input-${inputSize} ${
          error ? "input-error" : ""
        } border-${showBorder} ${classes}`}
        style={inputStyle}
      />
      <motion.span
        className="error-message"
        initial={false}
        animate={{
          opacity: error ? 1 : 0,
        }}
      >
        {error ? (
          errorMessage && (
            <div className="error-container">
              <FontAwesomeIcon icon={faWarning} className="error-icon" />
              {errorMessage}
            </div>
          )
        ) : (
          <span>&nbsp;</span>
        )}
      </motion.span>
    </div>
  );
}
