import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Slider, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const Home1Page = () => {
  const navigate = useNavigate();

  const [frame1000004318value, setFrame1000004318value] = React.useState("");
  const [frameninetyonevalue, setFrameninetyonevalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-portlligatslab items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start max-w-[1919px] w-full">
          <header className="bg-white-A700 flex items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1680px] mb-[22px] mt-[25px] mx-auto w-full">
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
                    Velvet
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
                    <a href="javascript:" className="text-base text-gray-900">
                      <Text size="txtManropeMedium16">Home</Text>
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
                    <a className="text-base text-gray-900">
                      <Text
                        className="common-pointer"
                        size="txtManropeMedium16"
                        onClick={() => navigate("/contact")}
                      >
                        Contact Us
                      </Text>
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
          <div className="font-manrope md:h-[1041px] h-[833px] md:px-5 relative w-full">
            <div className="absolute bg-gray-500 flex flex-col h-max inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[627px] w-full">
              <Img
                className="h-[832px] md:h-auto object-cover w-full"
                src="images/img_rectangle3.png"
                alt="rectangleThree"
              />
            </div>
            <div className="absolute bg-gradient  flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[207px] md:px-10 sm:px-5 w-3/4">
              <div className="flex flex-col gap-[52px] items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-[510px] sm:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[510px] sm:w-full">
                    <div className="flex flex-row font-manrope gap-[9px] items-start justify-start w-[35%] md:w-full">
                      <Img
                        className="h-[25px]"
                        src="images/img_headerlogofdb.svg"
                        alt="headerlogofdb"
                      />
                      <Text
                        className="mt-[3px] text-[15px] text-white-A700 tracking-[1.50px] uppercase"
                        size="txtManropeSemiBold15"
                      >
                        VELVET ESCORTS{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[115.00%] md:text-5xl text-[70px] text-lime-100 tracking-[-0.70px]"
                      size="txtPlayfairDisplayRomanBold70"
                    >
                      <>
                        Find a service
                        <br />
                        close to you
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[508px] sm:w-full">
                    <Text
                      className="leading-[170.00%] max-w-[508px] md:max-w-full text-lg text-white-A700"
                      size="txtManropeRegular18"
                    >
                      Where sophistication meets sensuality, explore the epitome
                      of luxury.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-start rounded-[44px] w-auto md:w-full">
                  <div className="bg-white-A700 flex md:flex-col flex-row gap-[46px] h-[88px] md:h-auto items-center justify-start pl-10 sm:pl-5 pr-3.5 py-5 rounded-[44px] shadow-bs w-auto">
                    <div className="flex md:flex-col flex-row font-inter gap-6 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Service Name
                        </Text>
                        <Input
                          name="frame1000004318"
                          placeholder="Book your services..."
                          value={frame1000004318value}
                          onChange={(e) => setFrame1000004318value(e)}
                          className="!placeholder:text-gray-900 !text-gray-900 font-roboto leading-[normal] p-0 text-left text-sm w-full"
                          wrapClassName="flex w-[307px]"
                          suffix={
                            frame1000004318value?.length > 0 ? (
                              <CloseSVG
                                className="mt-auto mb-px cursor-pointer h-4 ml-[35px]"
                                onClick={() => setFrame1000004318value("")}
                                fillColor="#141414"
                                height={16}
                                width={16}
                                viewBox="0 0 16 16"
                              />
                            ) : (
                              <Img
                                className="mt-auto mb-px cursor-pointer h-4 ml-[35px]"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            )
                          }
                          shape="square"
                          color="gray_900"
                          size="xs"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Address
                        </Text>
                        <div className="font-roboto h-6 pb-2 relative w-[307px]">
                          <div className="absolute md:h-6 h-[23px] inset-[0] justify-center m-auto w-full">
                            <div className="border-b border-gray-900 border-solid h-6 m-auto w-full"></div>
                            <Img
                              className="absolute h-4 right-[0] top-[0] w-4"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                          <Text
                            className="absolute left-[0] text-gray-900 text-sm top-[0] w-auto"
                            size="txtRobotoRegular14"
                          >
                            Where
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Input
                      name="frameNinetyOne"
                      placeholder="Search"
                      value={frameninetyonevalue}
                      onChange={(e) => setFrameninetyonevalue(e)}
                      className="!placeholder:text-gray-50 !text-gray-50 font-manrope font-semibold leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="flex rounded-[33px] w-[211px] md:w-full"
                      suffix={
                        frameninetyonevalue?.length > 0 ? (
                          <CloseSVG
                            className="mt-0.5 mb-1 cursor-pointer h-[26px] ml-[23px]"
                            onClick={() => setFrameninetyonevalue("")}
                            fillColor="#f8f8f8"
                            height={26}
                            width={26}
                            viewBox="0 0 26 26"
                          />
                        ) : (
                          <Img
                            className="mt-0.5 mb-1 cursor-pointer h-[26px] ml-[23px]"
                            src="images/img_search_white_a700.svg"
                            alt="search"
                          />
                        )
                      }
                      color="gray_500"
                      size="sm"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 2 },
            1050: { items: 3 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          activeSlideCSS="scale-[0.03]"
          magnifiedIndex={1}
          centerMode
          ref={sliderRef}
          className="font-manrope max-w-[1777px] mt-[69px] mx-auto md:px-5 w-full"
          items={[...Array(9)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex flex-col h-[170px] md:h-auto items-center justify-center max-w-[1705px] mx-2.5 md:px-10 sm:px-5 px-[120px]">
                <div className="flex md:flex-col flex-row gap-[53px] h-[170px] md:h-auto items-center justify-center max-w-[1705px] w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-60">
                    <div className="h-24 relative w-[126px]">
                      <div className="absolute bg-lime-100_7f h-24 inset-y-[0] left-[0] my-auto rounded-[50%] w-24"></div>
                      <Img
                        className="absolute h-24 inset-y-[0] my-auto right-[0] w-24"
                        src="images/img_beautician1.svg"
                        alt="beauticianOne"
                      />
                    </div>
                    <Text
                      className="text-center text-gray-800 text-lg w-auto"
                      size="txtManropeBold18"
                    >
                      One Shot
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-60">
                    <Img
                      className="h-24 w-[126px]"
                      src="images/img_frame1000004333.svg"
                      alt="frame1000004333"
                    />
                    <Text
                      className="text-center text-gray-800 text-lg w-auto"
                      size="txtManropeBold18"
                    >
                      Bachelor’s Party Special
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-60">
                    <Img
                      className="h-24 w-[119px]"
                      src="images/img_frame1000004335.svg"
                      alt="frame1000004335"
                    />
                    <Text
                      className="text-center text-gray-800 text-xl w-auto"
                      size="txtManropeBold20"
                    >
                      Full Night
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-60">
                    <Img
                      className="h-24 w-[126px]"
                      src="images/img_frame1000004336.svg"
                      alt="frame1000004336"
                    />
                    <Text
                      className="text-center text-gray-800 text-lg w-auto"
                      size="txtManropeBold18"
                    >
                      Happy Ending Massage
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-60">
                    <Img
                      className="h-24 w-[126px]"
                      src="images/img_frame1000004334.svg"
                      alt="frame1000004334"
                    />
                    <Text
                      className="text-center text-gray-800 text-lg w-auto"
                      size="txtManropeBold18"
                    >
                      TripleFun
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-60">
                    <div className="h-24 relative w-[126px]">
                      <div className="absolute bg-lime-100_7f h-24 inset-y-[0] left-[0] my-auto rounded-[50%] w-24"></div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto px-[5px] right-[0] w-24">
                        <div className="h-24 md:h-[93px] relative w-[98%]">
                          <div className="h-[93px] m-auto w-[95%]">
                            <div className="absolute h-[93px] inset-y-[0] my-auto right-[0] w-[94%]">
                              <div className="md:h-[92px] h-[93px] m-auto w-full">
                                <div className="absolute md:h-[92px] h-[93px] inset-y-[0] left-[0] my-auto w-[87%]">
                                  <div className="absolute md:h-[49px] h-[63px] inset-x-[0] mx-auto top-[0] w-16">
                                    <div className="absolute bottom-[0] h-14 md:h-[49px] inset-x-[0] mx-auto w-full">
                                      <div className="absolute bottom-[0] md:h-[49px] h-[51px] inset-x-[0] mx-auto w-full">
                                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                          <div className="flex flex-row gap-2 items-start justify-between w-full">
                                            <Img
                                              className="h-[34px] mb-3.5"
                                              src="images/img_television.svg"
                                              alt="television"
                                            />
                                            <Img
                                              className="h-7 mt-5"
                                              src="images/img_user.svg"
                                              alt="user"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[9px] items-start justify-start right-[14%] top-[0] w-[18%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group50.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[9px] w-2"
                                            src="images/img_user_white_a700.svg"
                                            alt="user_One"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-3 items-start justify-start right-[23%] top-[0] w-[22%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group49.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[11px]"
                                          src="images/img_settings.svg"
                                          alt="settings"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] items-start justify-start right-[33%] top-[5%] w-[13px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group48.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-3"
                                        src="images/img_settings.svg"
                                        alt="settings_One"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-10 items-start justify-start pb-3.5 px-3.5 right-[6%] top-[0] w-4/5"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group47.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[13px] mb-[11px]"
                                        src="images/img_television_white_a700.svg"
                                        alt="television_One"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-end my-auto p-[3px] right-[19%] w-[57%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group46.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-7 mb-3.5 mt-11"
                                      src="images/img_contrast.svg"
                                      alt="contrast"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[12%] h-[46px] right-[0]"
                                  src="images/img_checkmark.svg"
                                  alt="checkmark"
                                />
                              </div>
                              <Img
                                className="absolute h-[93px] inset-y-[0] left-[20%] my-auto"
                                src="images/img_profile.svg"
                                alt="vector"
                              />
                            </div>
                            <Img
                              className="absolute h-[45px] left-[0] top-[20%]"
                              src="images/img_user_white_a700_45x34.svg"
                              alt="user_Two"
                            />
                          </div>
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-24 md:h-[83px] relative w-full">
                                <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[66%]">
                                  <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Line className="bg-gray-500 h-[15px] w-[3px]" />
                                      <Img
                                        className="h-[18px] mt-[3px]"
                                        src="images/img_favorite.svg"
                                        alt="favorite"
                                      />
                                    </div>
                                    <Img
                                      className="h-[19px]"
                                      src="images/img_settings_gray_500.svg"
                                      alt="settings_Two"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[29%] h-[17px] left-[18%] w-[17px]"
                                  src="images/img_checkmark_gray_500.svg"
                                  alt="checkmark_One"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[85px] items-end justify-end left-[0] p-[23px] sm:px-5 top-[0] w-[95%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group51.svg')",
                                  }}
                                >
                                  <div className="flex flex-col justify-start mt-[3px] w-[76%] md:w-full">
                                    <Img
                                      className="h-4"
                                      src="images/img_contrast_gray_500.svg"
                                      alt="contrast_One"
                                    />
                                    <div className="flex flex-row items-start justify-evenly md:ml-[0] ml-[9px] w-3/5 md:w-full">
                                      <Img
                                        className="h-[15px] mt-0.5"
                                        src="images/img_mobile.svg"
                                        alt="mobile"
                                      />
                                      <Img
                                        className="h-[3px]"
                                        src="images/img_vector.svg"
                                        alt="vector_Two"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="max-w-[108px] md:max-w-full text-center text-gray-800 text-lg"
                      size="txtManropeBold18"
                    >
                      Custom Packages
                    </Text>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
        <div className="bg-blue_gray-50_7f flex flex-col gap-[23px] items-center justify-start max-w-[1895px] mt-[49px] mx-auto md:px-5 px-[120px] py-16 w-full">
          <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start max-w-[823px] w-full">
                <div className="flex flex-col font-playfairdisplay items-start justify-start w-full">
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-800 tracking-[-0.45px] w-auto"
                    size="txtPlayfairDisplayRomanBold45"
                  >
                    We are the best in business all over India
                  </Text>
                </div>
                <Text
                  className="text-center text-gray-700 text-xl w-full"
                  size="txtManropeRegular20"
                >
                  Trusted by over 10k+ clients across india
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end py-4 w-full">
            <div className="flex flex-col h-[611px] md:h-auto items-center justify-start rounded-[40px] w-full">
              <div className="flex md:flex-col flex-row gap-6 h-full items-center justify-start rounded-[40px] w-full">
                <Img
                  className="flex-1 md:flex-none md:h-[611px] sm:h-auto h-full max-h-[611px] object-cover sm:w-[] md:w-[]"
                  src="images/img_rectangle7.png"
                  alt="rectangleSeven"
                />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-6 items-start justify-center w-full">
                    <Img
                      className="h-[293px] md:h-auto object-cover w-full"
                      src="images/img_rectangle11.png"
                      alt="rectangleEleven"
                    />
                    <Img
                      className="h-[293px] md:h-auto object-cover w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-center w-full">
                    <Img
                      className="h-[293px] md:h-auto object-cover w-full"
                      src="images/img_rectangle11_293x544.png"
                      alt="rectangleEleven"
                    />
                    <Img
                      className="h-[293px] md:h-auto object-cover w-full"
                      src="images/img_rectangle10_293x544.png"
                      alt="rectangleTen"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope md:gap-10 gap-[69px] items-center justify-start max-w-[1752px] mt-[170px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start max-w-3xl w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-center text-gray-500 tracking-[1.50px] uppercase w-full"
                    size="txtManropeSemiBold15Gray500"
                  >
                    Our Services
                  </Text>
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-800 w-full"
                    size="txtPlayfairDisplayRomanBold45"
                  >
                    Recommended
                  </Text>
                </div>
                <Text
                  className="text-center text-gray-700 text-xl w-full"
                  size="txtManropeRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et
                  proin neque.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-playfairdisplay gap-6 items-center justify-center w-auto md:w-full">
            <Img
              className="h-12 w-12"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[92%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                <Img
                  className="h-[275px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-96 md:w-full"
                  src="images/img_rectangle11_275x384.png"
                  alt="rectangleEleven"
                />
                <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-1 items-center justify-between w-full">
                    <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-base text-gray-500"
                        size="txtOpenSansRomanRegular16"
                      >
                        4.5
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPlayfairDisplayRomanBold18"
                    >
                      104 reviews{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Salon Name
                    </Text>
                    <div className="flex flex-row font-inter gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-[18px] mt-[3px] w-[18px]"
                        src="images/img_placeholder1.svg"
                        alt="placeholderOne"
                      />
                      <Text
                        className="sm:flex-1 text-base text-gray-700 w-[93%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Brookpark Ext, 27085, North Olmsted, 44070
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="border border-gray-500 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                    color="gray_500"
                    size="xs"
                    variant="fill"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                <Img
                  className="h-[275px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-96 md:w-full"
                  src="images/img_rectangle11_1.png"
                  alt="rectangleEleven"
                />
                <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-1 items-center justify-between w-full">
                    <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-base text-gray-500"
                        size="txtOpenSansRomanRegular16"
                      >
                        4.5
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPlayfairDisplayRomanBold18"
                    >
                      104 reviews{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Salon Name
                    </Text>
                    <div className="flex flex-row font-inter gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_placeholder1.svg"
                        alt="placeholderOne"
                      />
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterRegular16Bluegray500"
                      >
                        2267 Main st, Fort Myers, 33901
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                    color="gray_500"
                    size="xs"
                    variant="outline"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                <Img
                  className="h-[275px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-96 md:w-full"
                  src="images/img_rectangle11_2.png"
                  alt="rectangleEleven"
                />
                <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-1 items-center justify-between w-full">
                    <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-base text-gray-500"
                        size="txtOpenSansRomanRegular16"
                      >
                        4.5
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPlayfairDisplayRomanBold18"
                    >
                      104 reviews{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Deluxe room
                    </Text>
                    <div className="flex flex-row font-inter gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_placeholder1.svg"
                        alt="placeholderOne"
                      />
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterRegular16Bluegray500"
                      >
                        2267 Main st, Fort Myers, 33901
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                    color="gray_500"
                    size="xs"
                    variant="outline"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                <Img
                  className="h-[275px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-96 md:w-full"
                  src="images/img_rectangle11_3.png"
                  alt="rectangleEleven"
                />
                <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-1 items-center justify-between w-full">
                    <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-base text-gray-500"
                        size="txtOpenSansRomanRegular16"
                      >
                        4.5
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPlayfairDisplayRomanBold18"
                    >
                      104 reviews{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold24"
                    >
                      Meeting room
                    </Text>
                    <div className="flex flex-row font-inter gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_placeholder1.svg"
                        alt="placeholderOne"
                      />
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterRegular16Bluegray500"
                      >
                        2267 Main st, Fort Myers, 33901
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                    color="gray_500"
                    size="xs"
                    variant="outline"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </List>
            <Img
              className="h-12 w-12"
              src="images/img_arrowleft.svg"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="bg-gradient1  flex flex-col font-manrope gap-14 items-center justify-start max-w-[1920px] mt-[111px] py-16 w-full">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[120px] py-[11px] w-full">
            <div className="flex flex-col gap-0.5 items-center justify-start w-[552px] sm:w-full">
              <Text
                className="text-[15px] text-center text-gray-500 tracking-[1.50px] uppercase w-auto"
                size="txtManropeSemiBold15Gray500"
              >
                Testimonials
              </Text>
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                size="txtPlayfairDisplayRomanBold45Gray900"
              >
                What our Customers says...
              </Text>
            </div>
          </div>
          <div className="bg-gray-800 flex flex-col items-center justify-center max-w-[1682px] mx-auto md:px-5 py-24 rounded-[40px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-start justify-center p-3.5 w-[48%] md:w-full">
                <div className="bg-white-A700 h-[228px] mb-60 sm:ml-[0] ml-[69px] rounded-[35px] w-[13%]"></div>
                <div className="flex mb-[25px] mr-[103px] relative w-[54%] sm:w-full">
                  <div className="bg-white-A700 h-[443px] my-auto rounded-[35px] w-[24%]"></div>
                  <Img
                    className="h-[280px] mb-[49px] ml-[-58px] mt-auto rounded-[50%] w-[280px] z-[1]"
                    src="images/img_ellipse1.png"
                    alt="ellipseOne"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-5 h-[339px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-5 w-[576px]"
                    src="images/img_frame13.svg"
                    alt="frameThirteen"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-light_green-50 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20"
                    >
                      Leslie Alexander
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Moncton, Canada
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-50 tracking-[-0.72px] w-auto"
                      size="txtPlayfairDisplayRomanSemiBold36"
                    >
                      Neque porro quisquam est qui dolum
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[594px] md:max-w-full text-[19px] text-white-A700"
                      size="txtManropeRegular19"
                    >
                      “ It is a long established fact that a reader will be
                      tracked distracted by the readable content of a page is
                      when looking at its layout. The point of using Lorem of
                      distribution it look like readable English “
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-[576px]"
                    src="images/img_frame14.svg"
                    alt="frameFourteen"
                  />
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[52px] w-[119px]"
            src="images/img_frame1000004329.svg"
            alt="frame1000004329"
          />
        </div>
        <div className="bg-blue_gray-50_38 flex flex-col font-manrope h-[414px] md:h-auto items-center justify-center max-w-[1448px] mt-[86px] mx-auto px-24 md:px-5 py-[34px] rounded-[30px] w-full">
          <div className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1328px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
              <Img
                className="h-[353px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[46px] items-start justify-start max-w-[652px] w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start max-w-[635px] w-full">
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                  size="txtPlayfairDisplayRomanBold45Gray900"
                >
                  Subscribe to newsletter
                </Text>
                <Text
                  className="leading-[137.50%] max-w-[635px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                  Sign up for our newsletter to stay up-to-date on the latest
                  promotions, discounts, and new features releases.
                </Text>
              </div>
              <div className="bg-white-A700 border border-pink-100 border-solid flex flex-row sm:gap-10 gap-[213px] items-center justify-start p-[9px] rounded-[34px] w-[84%] md:w-full">
                <div className="flex flex-row gap-1.5 items-end justify-center ml-[19px] w-[29%]">
                  <Img
                    className="h-8 w-8"
                    src="images/img_email1.svg"
                    alt="emailOne"
                  />
                  <Text
                    className="mb-[3px] mt-1.5 text-base text-cyan-900"
                    size="txtManropeRegular16"
                  >
                    Enter your mail
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[144px] rounded-[25px] text-base text-center"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-playfairdisplay items-center justify-center mt-[86px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
