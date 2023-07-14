import "./style.scss";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export interface CheckBoxProps {
  value: boolean;
  onChange?: (value: boolean) => void;
  size?: "sm" | "lg" | "md";
  checkboxStyle?: React.CSSProperties;
}
export default function CheckBox({
  value,
  onChange,
  size = "md",
  checkboxStyle,
}: CheckBoxProps) {
  return (
    <motion.span
      initial={false}
      style={checkboxStyle}
      animate={{
        backgroundColor: value ? "#13a533" : "#fff",
        borderColor: value ? "#13a533" : "#3f3f3f",
      }}
      className={`checkbox-container checkbox-${size} ${
        value ? "checkbox-checked" : ""
      }`}
      onClick={() => {
        if (onChange) {
          onChange(!value);
        }
      }}
    >
      <FontAwesomeIcon icon={faCheck} className={`check`} />
    </motion.span>
  );
}
