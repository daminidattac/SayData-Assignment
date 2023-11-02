import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md", circle: "rounded-[50%]" };
const variants = {
  fill: {
    blue_gray_50: "bg-blue_gray-50",
    blue_gray_100_01: "bg-blue_gray-100_01 text-white-A700",
    blue_50: "bg-blue-50",
    blue_900: "bg-blue-900 text-white-A700",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-2.5", sm: "p-[13px]", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_gray_50",
    "blue_gray_100_01",
    "blue_50",
    "blue_900",
    "white_A700",
  ]),
};

export { Button };
