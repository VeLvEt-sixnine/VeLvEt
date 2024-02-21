import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-start max-w-[1920px] w-full">
          <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[66px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[52px] items-start justify-start max-w-[1200px] mb-2.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[651px] items-center justify-start max-w-[1199px] w-full">
                <Img
                  className="h-[50px] w-[246px]"
                  src="images/img_logo.svg"
                  alt="logo"
                />
                <div className="flex flex-row gap-2.5 items-center justify-end w-[250px]">
                  <Button
                    className="flex h-[55px] items-center justify-center w-[55px]"
                    shape="square"
                    color="pink_100"
                    size="xs"
                    variant="outline"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>
                  <Button
                    className="flex h-[55px] items-center justify-center w-[55px]"
                    shape="square"
                    color="pink_100"
                    size="xs"
                    variant="outline"
                  >
                    <Img src="images/img_twitter.svg" alt="twitter" />
                  </Button>
                  <Button
                    className="flex h-[55px] items-center justify-center w-[55px]"
                    shape="square"
                    color="pink_100"
                    size="xs"
                    variant="outline"
                  >
                    <Img src="images/img_linkedin.svg" alt="linkedin" />
                  </Button>
                  <Button
                    className="flex h-[55px] items-center justify-center w-[55px]"
                    shape="square"
                    color="pink_100"
                    size="xs"
                    variant="outline"
                  >
                    <Img src="images/img_instagram.svg" alt="instagram" />
                  </Button>
                </div>
              </div>
              <Line className="bg-white-A700_67 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[129px] items-start justify-start max-w-[1199px] w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start w-[272px]">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtPlayfairDisplayRomanBold22WhiteA700"
                  >
                    Explore
                  </Text>
                  <Text
                    className="leading-[200.00%] text-[17px] text-white-A700 tracking-[-0.17px]"
                    size="txtManropeMedium17"
                  >
                    <>
                      Home
                      <br />
                      About Us
                      <br />
                      Services
                      <br />
                      Blog
                      <br />
                      Contact Us
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start w-[271px]">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtPlayfairDisplayRomanBold22WhiteA700"
                  >
                    Utility Pages
                  </Text>
                  <Text
                    className="leading-[200.00%] text-[17px] text-white-A700 tracking-[-0.17px]"
                    size="txtManropeMedium17"
                  >
                    <span className="text-white-A700 font-manrope text-left font-medium">
                      Privacy Policy
                    </span>
                    <span className="text-white-A700 font-manrope text-left font-medium">
                      <>
                        {" "}
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-manrope text-left font-medium">
                      Terms of Use
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start w-[324px]">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtPlayfairDisplayRomanBold22WhiteA700"
                  >
                    Keep in Touch
                  </Text>
                  <ul className="flex flex-col gap-3.5 items-start justify-start w-[324px] md:w-full common-column-list">
                    <li>
                      <div className="flex flex-row gap-3.5 items-start justify-start">
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeBold17"
                        >
                          Address :
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[234px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.17px]"
                          size="txtManropeMedium17"
                        >
                          Mariendalsvej 50D 2 2000 Frederiksberg.
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-[47px] items-center justify-start">
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeBold17"
                        >
                          Mail :
                        </Text>
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeMedium17"
                        >
                          support@servicemarket.com
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-[29px] items-start justify-start">
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeBold17"
                        >
                          Phone :
                        </Text>
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-[167px]"
                          size="txtManropeMedium17"
                        >
                          (+22) 123 - 4567 - 900
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-col items-center justify-end p-[26px] sm:px-5 w-full">
            <Img
              className="h-[21px]"
              src="images/img_2023servicemarketdk.svg"
              alt="2023servicemark"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
