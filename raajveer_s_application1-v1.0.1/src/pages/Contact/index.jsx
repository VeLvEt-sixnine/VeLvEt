import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope sm:gap-10 md:gap-10 gap-[118px] items-center justify-start mx-auto w-full">
        <div className="sm:h-[1055px] md:h-[1173px] h-[1372px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1199px] mx-auto w-full">
            <div className="md:h-[570px] h-[611px] relative w-[46%] md:w-full">
              <Img
                className="absolute h-[565px] object-cover right-[0] top-[0] w-[92%]"
                src="images/img_background.png"
                alt="background"
              />
              <div className="absolute bg-blue_gray-100_01 bottom-[0] flex flex-col items-center justify-start left-[0] shadow-bs2 w-[92%]">
                <Img
                  className="h-[570px] md:h-auto object-cover w-full"
                  src="images/img_photo_570x500.png"
                  alt="photo"
                />
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[43px] items-start justify-start w-[534px] sm:w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-[534px] sm:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[435px] sm:w-full">
                  <Text
                    className="text-[15px] text-gray-800 tracking-[1.50px] uppercase w-auto"
                    size="txtManropeSemiBold15Gray800"
                  >
                    Get in Touch!
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[435px] md:max-w-full sm:text-[35px] md:text-[41px] text-[45px] text-gray-900 tracking-[-0.45px]"
                    size="txtPlayfairDisplayRomanBold45Gray900"
                  >
                    We are here to help you always...
                  </Text>
                </div>
                <Text
                  className="leading-[175.00%] max-w-[534px] md:max-w-full text-gray-900 text-lg"
                  size="txtManropeRegular18Gray900"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, buying to many desktop publishing packages.
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-[476px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start w-[476px] sm:w-full">
                  <Button
                    className="flex h-[65px] items-center justify-center w-[65px]"
                    shape="round"
                    color="gray_800"
                    size="xs"
                    variant="outline"
                  >
                    <Img src="images/img_home.svg" alt="home" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-96 sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Visit Us :
                    </Text>
                    <Text
                      className="text-base text-gray-900 tracking-[0.96px] uppercase w-auto"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Mariendalsvej 50D 2 2000 Frederiksberg.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start w-[344px]">
                  <Button
                    className="flex h-[65px] items-center justify-center w-[65px]"
                    shape="round"
                    color="gray_800"
                    size="xs"
                    variant="outline"
                  >
                    <Img src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-[252px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Drop Us :
                    </Text>
                    <Text
                      className="text-base text-gray-900 tracking-[0.96px] uppercase w-auto"
                      size="txtManropeSemiBold16Gray900"
                    >
                      support@beautyness.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start w-[280px]">
                  <Button
                    className="flex h-[65px] items-center justify-center w-[65px]"
                    shape="round"
                    color="gray_800"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-[26px]"
                      src="images/img_call.svg"
                      alt="call"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-[188px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Call Us :
                    </Text>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[0.96px] uppercase w-auto"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Call: 1-800-123-9999
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute font-portlligatslab h-[1055px] inset-x-[0] mx-auto top-[0] w-[1920px] md:w-full">
            <header className="bg-white-A700 flex items-center justify-center mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1680px] mx-[120px] my-[22px] w-full">
                <div className="header-row my-[5px]">
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <Img
                      className="common-pointer h-10 w-[39px]"
                      src="images/img_close.svg"
                      alt="close"
                      onClick={() => navigate(-1)}
                    />
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-500 tracking-[1.93px] uppercase w-auto"
                      size="txtPortLligatSlabRegular35"
                    >
                      VELVET
                    </Text>
                  </div>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-manrope gap-9 sm:hidden items-center justify-end w-auto">
                  <ul className="flex flex-row gap-[46px] sm:hidden items-center justify-end w-[444px] sm:w-full common-row-list">
                    <li>
                      <a className="text-base text-gray-900">
                        <Text
                          className="common-pointer"
                          size="txtManropeMedium16"
                          onClick={() => navigate("/")}
                        >
                          Home
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-900">
                        <Text
                          className="common-pointer"
                          size="txtManropeMedium16"
                          onClick={() => navigate("/about")}
                        >
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-900">
                        <Text size="txtManropeMedium16">Contact Us</Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-row items-center justify-center px-4 py-2 rounded-lg w-auto">
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeBold16"
                    >
                      EN
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer font-bold min-w-[91px] text-base text-center"
                      shape="round"
                      color="gray_900"
                      size="xs"
                      variant="outline"
                    >
                      Login
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[100px] text-base text-center"
                      shape="round"
                      color="gray_900"
                      size="xs"
                      variant="fill"
                    >
                      Signup
                    </Button>
                  </div>
                </div>
              </div>
            </header>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="h-[1055px] relative w-full">
                <div className="bg-gray-800 h-[495px] mt-[97px] mx-auto w-full"></div>
                <div className="absolute h-[1055px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[1055px] m-auto object-cover w-full"
                    src="images/img_photo_1055x1920.png"
                    alt="photo_One"
                  />
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[649px] mx-auto top-1/4 w-full">
                    <div className="flex flex-col gap-2 items-center justify-start max-w-[649px] w-full">
                      <Text
                        className="text-[15px] text-center text-white-A700 tracking-[1.50px] uppercase w-auto"
                        size="txtManropeSemiBold15"
                      >
                        GET IN TOUCH WITH US
                      </Text>
                      <Text
                        className="leading-[120.00%] sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700 tracking-[-0.55px]"
                        size="txtPlayfairDisplayRomanBold55WhiteA700"
                      >
                        <>
                          We Are Ready To Assist
                          <br />
                          You In 24x7
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 flex flex-col items-center justify-start p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start max-w-[1010px] w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-[622px] md:w-full">
              <div className="flex flex-col gap-0.5 items-center justify-start w-[453px] sm:w-full">
                <Text
                  className="text-[15px] text-center text-gray-500 tracking-[1.50px] uppercase w-auto"
                  size="txtManropeSemiBold15Gray500"
                >
                  SCHEDULE YOUR PRESENCE
                </Text>
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-800 tracking-[-0.45px] w-auto"
                  size="txtPlayfairDisplayRomanBold45"
                >
                  Get in touch
                </Text>
              </div>
              <Text
                className="leading-[175.00%] max-w-[622px] md:max-w-full text-center text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1010px] md:px-10 sm:px-5 px-[100px] py-[98px] rounded-[20px] shadow-bs3 w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start max-w-[810px] w-full">
                <Input
                  name="name"
                  placeholder="Name"
                  className="font-dmsans p-0 placeholder:text-gray-700 text-[19px] text-left tracking-[-0.19px] w-full"
                  wrapClassName="border border-gray-700 border-solid flex w-full"
                  type="text"
                  prefix={
                    <div className="h-6 mt-px mr-[15px] w-6 rounded-[5px]">
                      <Img
                        className="h-6 rounded-[5px] my-auto"
                        src="images/img_user_gray_800.svg"
                        alt="user"
                      />
                    </div>
                  }
                  shape="round"
                ></Input>
                <Input
                  name="email_One"
                  placeholder="Email"
                  className="font-dmsans p-0 placeholder:text-gray-700 text-[19px] text-left tracking-[-0.19px] w-full"
                  wrapClassName="border border-gray-700 border-solid flex w-full"
                  type="email"
                  prefix={
                    <Img
                      className="mt-px mb-auto h-6 mr-[15px]"
                      src="images/img_lock_gray_800.svg"
                      alt="lock"
                    />
                  }
                  shape="square"
                ></Input>
                <Input
                  name="phone"
                  placeholder="Phone"
                  className="font-dmsans p-0 placeholder:text-gray-700 text-[19px] text-left tracking-[-0.19px] w-full"
                  wrapClassName="border border-gray-700 border-solid flex w-full"
                  type="number"
                  prefix={
                    <div className="h-6 mr-[15px] w-6 rounded-[5px] my-px">
                      <Img
                        className="h-6 rounded-[5px] my-auto"
                        src="images/img_call_gray_800.svg"
                        alt="call"
                      />
                    </div>
                  }
                  shape="round"
                ></Input>
                <Input
                  name="serviceyouneed"
                  placeholder="Service You Need"
                  className="font-dmsans p-0 placeholder:text-gray-700 text-[19px] text-left tracking-[-0.19px] w-full"
                  wrapClassName="border border-gray-700 border-solid flex w-full"
                  prefix={
                    <div className="h-6 mt-px mr-[15px] w-6 rounded-[5px]">
                      <Img
                        className="h-6 rounded-[5px] my-auto"
                        src="images/img_bookopen.svg"
                        alt="book-open"
                      />
                    </div>
                  }
                  shape="round"
                ></Input>
                <div className="bg-white-A700 border border-gray-700 border-solid flex md:flex-col flex-row font-dmsans md:gap-5 items-start justify-end pl-[15px] pt-[15px] rounded-[5px] w-full">
                  <Img
                    className="h-[23px] md:mt-0 mt-1.5 rounded-[5px] w-[23px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                  <Text
                    className="mb-[76px] md:ml-[0] ml-[15px] md:mt-0 mt-1.5 text-[19px] text-gray-700 tracking-[-0.19px]"
                    size="txtDMSansRegular19"
                  >
                    Any Note For Us
                  </Text>
                  <Img
                    className="h-[15px] md:ml-[0] ml-[604px] md:mt-0 mt-[93px] rounded-[5px] w-[15px]"
                    src="images/img_settings_gray_700.svg"
                    alt="settings"
                  />
                </div>
                <Button
                  className="cursor-pointer font-extrabold font-manrope max-w-[810px] text-center text-sm tracking-[1.68px] uppercase w-full"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex font-playfairdisplay items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1919px] w-full">
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
                    <ul className="flex flex-col font-manrope gap-3.5 items-start justify-start w-[324px] md:w-full common-column-list">
                      <li>
                        <a href="javascript:">
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
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
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
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
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
                        </a>
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
      </div>
    </>
  );
};

export default ContactPage;
