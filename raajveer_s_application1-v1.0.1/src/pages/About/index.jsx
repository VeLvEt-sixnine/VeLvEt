import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-portlligatslab items-center justify-start mx-auto w-full">
        <div className="sm:h-[1058px] md:h-[1095px] h-[1439px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] md:h-[1095px] sm:h-[762px] h-[942px] inset-x-[0] mx-auto w-full">
            <div className="absolute bg-white-A700 h-[762px] inset-x-[0] mx-auto top-[0] w-full"></div>
            <div className="absolute bottom-[0] flex flex-col gap-[45px] inset-x-[0] items-center justify-start max-w-[694px] mx-auto w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start max-w-[659px] w-full">
                <Text
                  className="text-[15px] text-center text-gray-500 tracking-[1.50px] uppercase w-auto"
                  size="txtManropeSemiBold15Gray500"
                >
                  Our Values
                </Text>
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                  size="txtPlayfairDisplayRomanBold45Gray900"
                >
                  The work values we thrive for
                </Text>
              </div>
              <div className="flex flex-col gap-9 items-start justify-start max-w-[675px] w-full">
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[675px] w-full">
                  <div className="bg-lime-100_7f border border-gray-800 border-solid flex flex-col h-[100px] items-center justify-start p-3.5 rounded-[5px] w-[100px]">
                    <Img
                      className="h-[72px]"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[543px] sm:w-full">
                    <a
                      href="javascript:"
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                    >
                      <Text size="txtPlayfairDisplayRomanBold22">Privacy</Text>
                    </a>
                    <Text
                      className="leading-[175.00%] max-w-[543px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      We prioritize your privacy, ensuring all personal
                      information is handled with the utmost discretion. Your
                      confidentiality is our commitment, allowing you to enjoy
                      our services with peace of mind and complete trust.
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-[92%]" />
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[649px] w-full">
                  <div className="bg-lime-100_7f border border-gray-800 border-solid flex flex-col h-[100px] items-center justify-start p-[17px] rounded-[5px] w-[100px]">
                    <Img
                      className="h-[66px] rounded-[5px] w-[65px]"
                      src="images/img_user_gray_500.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[517px] sm:w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22"
                    >
                      Satisfaction
                    </Text>
                    <Text
                      className="leading-[175.00%] max-w-[516px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      Our dedicated team strives for unparalleled customer
                      satisfaction. From personalized experiences to attentive
                      service, we go the extra mile to exceed expectations,
                      ensuring each encounter with our escorts is memorable and
                      enjoyable.
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-[92%]" />
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[668px] w-full">
                  <div className="bg-lime-100_7f border border-gray-800 border-solid flex flex-col h-[100px] items-center justify-end p-3 rounded-[5px] w-[100px]">
                    <Img
                      className="h-[74px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[536px] sm:w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22"
                    >
                      Safety and Well-being
                    </Text>
                    <Text
                      className="leading-[175.00%] max-w-[536px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      Your safety and well-being are our top priorities.
                      Rigorous vetting processes, clear guidelines, and a
                      commitment to creating a secure environment ensure that
                      both clients and escorts can engage in our services with
                      confidence and peace of mind.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[1058px] inset-x-[0] mx-auto top-[0] w-[1920px] md:w-full">
            <header className="bg-white-A700 flex items-center justify-center mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1680px] mb-[22px] mt-[25px] mx-[120px] w-full">
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
                      <a href="javascript:" className="text-base text-gray-900">
                        <Text size="txtManropeMedium16">About Us</Text>
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
            <div className="absolute flex flex-col font-manrope h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="h-[1058px] relative w-full">
                <div className="bg-gray-800 h-[495px] mt-[100px] mx-auto w-full"></div>
                <div className="absolute h-[1058px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[1058px] m-auto object-cover w-full"
                    src="images/img_photo.png"
                    alt="photo"
                  />
                  <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-start max-w-[649px] mx-auto top-[21%] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start max-w-[649px] w-full">
                      <Text
                        className="text-[15px] text-center text-pink-100 tracking-[1.50px] uppercase w-auto"
                        size="txtManropeSemiBold15Pink100"
                      >
                        SHORT STORY ABOUT US
                      </Text>
                      <Text
                        className="leading-[120.00%] max-w-[649px] md:max-w-full sm:text-[41px] md:text-[47px] text-[55px] text-center text-lime-100 tracking-[-0.55px]"
                        size="txtPlayfairDisplayRomanBold55"
                      >
                        The big story behind, our escort services
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-extrabold min-w-[177px] text-center text-sm tracking-[1.68px] uppercase"
                      shape="square"
                      color="gray_500"
                      size="md"
                      variant="fill"
                    >
                      CoNTACT US
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-100_7f flex flex-col font-manrope items-center justify-end mt-[152px] p-[62px] md:px-10 sm:px-5 shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1200px] w-full">
              <div className="h-[610px] relative w-[46%] md:w-full">
                <div className="absolute bg-gray-800 h-[500px] inset-[0] justify-center m-auto w-full"></div>
                <div className="absolute bg-white-A700_01 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[88%]">
                  <div className="h-[610px] relative w-full">
                    <Img
                      className="h-[610px] m-auto object-cover w-full"
                      src="images/img_photo_610x480.png"
                      alt="photo_One"
                    />
                    <Img
                      className="absolute h-[610px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_photo_1.png"
                      alt="photo_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 flex flex-1 flex-col items-start justify-start max-w-[653px] md:px-10 sm:px-5 px-[72px] py-[74px] w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[508px] sm:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[460px] sm:w-full">
                    <Text
                      className="text-[15px] text-white-A700 tracking-[1.50px] uppercase w-auto"
                      size="txtManropeSemiBold15"
                    >
                      About Us
                    </Text>
                    <Text
                      className="leading-[130.00%] max-w-[460px] md:max-w-full sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[-0.45px]"
                      size="txtPlayfairDisplayRomanBold45WhiteA700"
                    >
                      <>&quot;Embark on a discreet adventure with us</>
                    </Text>
                  </div>
                  <Text
                    className="leading-[175.00%] max-w-[508px] md:max-w-full text-lg text-white-A700"
                    size="txtManropeRegular18"
                  >
                    Welcome to an exclusive world of discreet indulgence. Our
                    escort service promises unparalleled experiences marked by
                    privacy, professionalism, and absolute satisfaction. Embark
                    on a journey where each encounter is crafted for your
                    ultimate pleasure and peace of mind
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-start max-w-[1920px] mt-44 w-full">
          <div className="flex flex-1 flex-col h-[868px] md:h-auto items-center justify-center max-w-[1118px] md:px-5 px-[129px] py-[108px] w-full">
            <div className="flex flex-col items-center justify-start pb-1 pl-1 w-full">
              <div className="flex flex-col gap-[33px] items-start justify-start max-w-[873px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[747px] w-full">
                  <div className="flex flex-col gap-1.5 h-[94px] md:h-auto items-start justify-start w-[613px] md:w-full">
                    <Text
                      className="text-[15px] text-gray-500 tracking-[1.50px] uppercase w-auto"
                      size="txtManropeSemiBold15Gray500"
                    >
                      What Includes?
                    </Text>
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-800 tracking-[-0.45px] w-[477px]"
                      size="txtPlayfairDisplayRomanBold45"
                    >
                      The start of the journey
                    </Text>
                  </div>
                  <Text
                    className="leading-[175.00%] max-w-[747px] md:max-w-full text-gray-700 text-lg"
                    size="txtManropeRegular18Gray700"
                  >
                    ServiceMarket.dk was founded in 2021 by two young
                    entrepreneurs who saw a problem with the fragmented service
                    industry in Denmark. There were thousands of small
                    businesses offering services, but it was difficult for
                    consumers to find them and know which ones to choose. They
                    developed the idea of creating a platform that would bring
                    all these service providers together in one place, making it
                    easier for consumers to find what they need and get their
                    issues resolved quickly and easily. Without having to go to
                    many different websites, each with their own booking system.
                  </Text>
                </div>
                <div className="flex flex-col font-playfairdisplay gap-5 items-start justify-start w-[510px] sm:w-full">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
                    size="txtPlayfairDisplayRomanBold22"
                  >
                    Our Methodology :
                  </Text>
                  <List
                    className="flex flex-col font-manrope gap-[25px] items-start w-[510px] md:w-full"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start my-0 w-[510px] sm:w-full">
                      <Img
                        className="h-[33px] w-[33px]"
                        src="images/img_checkmark_gray_500_33x33.svg"
                        alt="checkmark"
                      />
                      <div className="flex flex-col gap-px items-start justify-start w-[448px] sm:w-full">
                        <Text
                          className="text-[19px] text-gray-900 w-auto"
                          size="txtManropeBold19"
                        >
                          Client Consultation and Needs Assessment
                        </Text>
                        <Text
                          className="leading-[175.00%] md:max-w-full max-w-md text-gray-700 text-lg"
                          size="txtManropeRegular18Gray700"
                        >
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal letters.
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start my-0 w-[510px] sm:w-full">
                      <Img
                        className="h-[33px] w-[33px]"
                        src="images/img_checkmark_gray_500_33x33.svg"
                        alt="checkmark"
                      />
                      <div className="flex flex-col gap-px items-start justify-start w-[448px] sm:w-full">
                        <Text
                          className="text-[19px] text-gray-900 w-auto"
                          size="txtManropeBold19"
                        >
                          Rigorous Escort Vetting and Training
                        </Text>
                        <Text
                          className="leading-[175.00%] md:max-w-full max-w-md text-gray-700 text-lg"
                          size="txtManropeRegular18Gray700"
                        >
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal letters.
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start my-0 w-[510px] sm:w-full">
                      <Img
                        className="h-[33px] w-[33px]"
                        src="images/img_checkmark_gray_500_33x33.svg"
                        alt="checkmark"
                      />
                      <div className="flex flex-col gap-px items-start justify-start w-[448px] sm:w-full">
                        <Text
                          className="text-[19px] text-gray-900 w-auto"
                          size="txtManropeBold19"
                        >
                          Continuous Feedback and Improvement
                        </Text>
                        <Text
                          className="leading-[175.00%] md:max-w-full max-w-md text-gray-700 text-lg"
                          size="txtManropeRegular18Gray700"
                        >
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal letters.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[42%] md:w-full">
            <div className="h-[827px] relative w-full">
              <Img
                className="h-[827px] m-auto object-cover w-full"
                src="images/img_photo_827x802.png"
                alt="photo_Three"
              />
              <div className="absolute bg-gray-800_6c flex flex-col h-full inset-[0] items-center justify-center m-auto p-[327px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[127px] mb-4 mt-[29px] w-[127px]"
                  src="images/img_playbutton.svg"
                  alt="playbutton"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient1  flex flex-col font-manrope gap-14 items-center justify-start max-w-[1920px] mt-[102px] py-16 w-full">
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
                    src="images/img_ellipse1_280x280.png"
                    alt="ellipseOne"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-5 h-[348px] md:h-auto items-start justify-start w-full">
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
                      Amit Raizada
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Bangalore, Karnataka, IN
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-50 tracking-[-0.72px] w-auto"
                      size="txtPlayfairDisplayRomanSemiBold36"
                    >
                      Exceptional service!
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[594px] md:max-w-full text-[19px] text-white-A700"
                      size="txtManropeRegular19"
                    >
                      The privacy they provide is unmatched. Professionalism
                      shines through every encounter. From discreet booking to
                      unforgettable moments, this escort service delivers on
                      satisfaction. Highly recommended for a truly refined
                      experience.
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
        <Footer className="flex font-playfairdisplay items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
