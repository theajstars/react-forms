import "./style.scss";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export interface RadioGroupProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  size?: "sm" | "lg" | "md";
  label?: string;
  checkboxStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  status?: "default" | "info" | "error" | "success" | "warning";
  children: React.ReactElement<RadioProps>[] | React.ReactElement<RadioProps>;
}
export default function RadioGroup({
  value,
  onChange,
  size = "md",
}: RadioGroupProps) {
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
    <span className="checkbox-parent">
      <motion.span
        initial={false}
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
    </span>
  );
}

export interface RadioProps {
  value: string | number;
  label: string;
}
export function Radio({ value, label }: RadioProps) {
  return (
    <span className="radio-container">
      <span className="radio"></span>
    </span>
  );
}
