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
}
export default function Select({
  value,
  onChange,
  size = "md",
  options,
  label,
  placeholder,
}: SelectProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className="select-container">
      {label && <span className="label">{label}</span>}
      <div className="select"></div>
      {showOptions && (
        <div className="options">
          {options.map((option) => {
            return (
              <span className="option" key={option.value} onClick={() => {}}>
                {option.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
