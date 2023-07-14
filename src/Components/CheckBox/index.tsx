import "./style.scss";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export interface CheckBoxProps {
  value: boolean;
  onChange?: (value: boolean) => void;
  size?: "sm" | "lg" | "md";
  checkboxStyle?: React.CSSProperties;
  status?: "default" | "info" | "error" | "success" | "warning";
}
export default function CheckBox({
  value,
  onChange,
  size = "md",
  status = "success",
  checkboxStyle,
}: CheckBoxProps) {
  const getCheckboxStatusColor = () => {
    switch (status) {
      case "default":
        return "#dddddd";
      case "error":
        return "#b73b3b";
      case "warning":
        return "#d39a0b";
      case "info":
        return "#1678ae";
      case "success":
        return "#13a533";
    }
  };
  return (
    <motion.span
      initial={false}
      style={checkboxStyle}
      animate={{
        backgroundColor: value ? getCheckboxStatusColor() : "#fff",
        borderColor: value ? getCheckboxStatusColor() : "#3f3f3f",
      }}
      className={`checkbox-container checkbox-${size} ${
        value ? `checkbox-checked checkbox-${status}` : ""
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
