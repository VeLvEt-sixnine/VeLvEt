import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[5px]" };
const variants = {
  fill: {
    gray_500: "bg-gray-500 text-white-A700",
    gray_800: "bg-gray-800 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    gray_900: "border border-gray-900 border-solid text-gray-900",
    gray_500: "border border-gray-500 border-solid text-gray-500",
    gray_800: "border-2 border-gray-800 border-solid",
    pink_100: "border-2 border-pink-100 border-solid",
  },
};
const sizes = { xs: "p-[15px]", sm: "p-[19px]", md: "p-[22px] sm:px-5" };

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
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_500", "gray_800", "gray_900", "pink_100"]),
};

export { Button };
