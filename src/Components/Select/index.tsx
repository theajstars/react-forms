import { useState } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

export interface SelectProps {
  value?: any;
  onChange?: (value: boolean) => void;
  size?: "sm" | "lg" | "md";
  label?: string;
  placeholder?: string;
  options: { value: any; label: string }[];
  fullWidth?: boolean;
}
export default function Select({
  value,
  onChange,
  size = "md",
  options,
  fullWidth,
  label,
  placeholder,
}: SelectProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const getCurrentHeight = () => {
    const optionsLength = options.length;
    if (optionsLength <= 7) {
      return "fit-content";
    }
    return "330px";
  };
  return (
    <div className="select-container">
      {label && <span className="label">{label}</span>}
      <div
        className="select"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      ></div>

      <motion.div
        initial={false}
        animate={{
          height: showOptions ? getCurrentHeight() : "0px",
          padding: showOptions ? "10px 0px" : "0px",
          overflowY: showOptions ? "auto" : "clip",
          border: showOptions ? "1px solid rgba(0, 103, 163, 0.549)" : "none",
        }}
        className="options"
      >
        {options.map((option) => {
          return (
            <span
              className="option"
              key={option.value}
              onClick={() => {
                if (onChange) {
                  onChange(option.value);
                }
                setShowOptions(false);
              }}
            >
              {option.label}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
