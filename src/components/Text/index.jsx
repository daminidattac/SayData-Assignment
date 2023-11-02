import React from "react";

const sizeClasses = {
  txtGothamProBold24: "font-bold font-gothampro",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold14Blue900: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterRegular14Gray80001: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular12Bluegray300: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
