import { Children } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

export interface RadioGroupProps {
  value: any;
  onChange: (value: any) => void;
  size?: "sm" | "lg" | "md";
  status?: "default" | "info" | "error" | "success" | "warning";
  children: React.ReactElement<RadioProps>[] | React.ReactElement<RadioProps>;
}
export default function RadioGroup({
  value,
  onChange,
  size = "md",
  status = "default",
  children,
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

  const radioElements = Children.map(children, (child) => {
    const { value, label } = child.props;
    if (!label || !value) {
      return undefined;
    }
    return { value, label };
  });
  console.log(radioElements);
  return (
    <div className={`radio-group-container radio-group-container-${status}`}>
      {radioElements.map((element) => {
        return (
          <span
            className={`radio-container radio-container-${size}`}
            onClick={() => {
              onChange(element.value);
            }}
          >
            {value === element.value && (
              <FontAwesomeIcon icon={faCircle} className="radio" />
            )}
          </span>
        );
      })}
    </div>
  );
}

export interface RadioProps {
  value: string | number;
  label: string;
}
export function Radio({ value, label }: RadioProps) {
  return <span />;
}
