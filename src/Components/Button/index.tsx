import { useRef, useState } from "react";

import { motion } from "framer-motion";

import ErrorIcon from "../../Assets/ErrorIcon.svg";
import SuccessIcon from "../../Assets/SuccessIcon.svg";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  showIcon?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "outlined" | "filled";
  status?: "default" | "info" | "error" | "success" | "warning";
  iconAnimation?: "spin" | "pulse";
  fullWidth?: boolean;
  classNameList?: string[];
  customIcon?: string;
}

export default function Button({
  label,
  showIcon = false,
  variant = "filled",
  size = "md",
  status = "default",
  iconAnimation,
  fullWidth = false,
  classNameList,
  customIcon,
  ...restOfProps
}: Omit<ButtonProps, "className">) {
  // const { onClick } = restOfProps
  const classes = classNameList ? classNameList.join(" ") : "";
  const inputRef = useRef<HTMLInputElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);
  const getButtonIcon = () => {
    switch (status) {
      case "default":
        return "" as IconName;
      case "error":
        return faTimes;
      case "success":
        return faCheck;
    }
  };
  const getButtonIconShowing = () => {
    if (!showIcon) {
      return false;
    } else {
      if (status === "default" && !customIcon) {
        return false;
      } else {
        if (status !== "default") {
          return true;
        }
      }
    }
    return true;
  };
  return (
    <button
      className={`button button-${size} button-${status} button-${status}-${variant} ${
        fullWidth ? "full-width" : ""
      } ${classes}`}
      {...restOfProps}
    >
      <motion.span
        initial={false}
        animate={{
          display: getButtonIconShowing() ? "flex" : "none",
          opacity: getButtonIconShowing() ? 1 : 0,
        }}
        className="icon"
      >
        <FontAwesomeIcon
          icon={getButtonIcon() as IconName}
          spin={iconAnimation === "spin"}
          pulse={iconAnimation === "pulse"}
        />
      </motion.span>

      {getButtonIconShowing() && <span>&nbsp;</span>}
      <span className={`label`}>{label}</span>
    </button>
  );
}
