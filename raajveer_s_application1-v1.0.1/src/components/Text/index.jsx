import React from "react";

const sizeClasses = {
  txtManropeSemiBold15Pink100: "font-manrope font-semibold",
  txtManropeBold20: "font-bold font-manrope",
  txtPlayfairDisplayRomanBold45: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanBold22: "font-bold font-playfairdisplay",
  txtManropeRegular20: "font-manrope font-normal",
  txtPlayfairDisplayRomanBold24: "font-bold font-playfairdisplay",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeBold17: "font-bold font-manrope",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeSemiBold15: "font-manrope font-semibold",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeRegular19: "font-manrope font-normal",
  txtManropeSemiBold15Gray800: "font-manrope font-semibold",
  txtManropeBold19: "font-bold font-manrope",
  txtManropeBold18: "font-bold font-manrope",
  txtManropeSemiBold15Gray500: "font-manrope font-semibold",
  txtManropeRegular18Gray900: "font-manrope font-normal",
  txtManropeSemiBold16Gray900: "font-manrope font-semibold",
  txtManropeRegular18Gray700: "font-manrope font-normal",
  txtPlayfairDisplayRomanBold70: "font-bold font-playfairdisplay",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular16Bluegray500: "font-inter font-normal",
  txtPlayfairDisplayRomanBold45Gray900: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanSemiBold36: "font-playfairdisplay font-semibold",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtPlayfairDisplayRomanBold45WhiteA700: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanBold18: "font-bold font-playfairdisplay",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPlayfairDisplayRomanBold55: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanBold22WhiteA700: "font-bold font-playfairdisplay",
  txtDMSansRegular19: "font-dmsans font-normal",
  txtRobotoRegular14: "font-normal font-roboto",
  txtPlayfairDisplayRomanBold55WhiteA700: "font-bold font-playfairdisplay",
  txtManropeMedium17: "font-manrope font-medium",
  txtManropeMedium16: "font-manrope font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtPortLligatSlabRegular35: "font-normal font-portlligatslab",
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
