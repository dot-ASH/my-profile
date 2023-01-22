import React from "react";
import { Fade, Slide } from "react-reveal";
import { Zoom } from "react-reveal";
import { ReactCurvedText } from "react-curved-text";
import { CldImage } from 'next-cloudinary';
import Image from "next/image";
import cf from "../public/cf1.png";

const Display = () => {
  return (
    <section id="display">
      <div className="home flex justify-between py-[1rem] mt-[1rem] 2xl:mx-[3rem]">
        {/* Left */}
        <div className="flex w-[35%] sm:mt-[4rem]">
          <Fade left>
            <div className="hidden sm:flex flex-row absolute justify-end dp-02 w-[200px] h-[250px] rounded-[0.3rem] showBorder overflow-hidden">
              <CldImage
                src={process.env.NEXT_PUBLIC_SECONDARY}
                width={3000}
                height={3000}
                alt="Tired"
                className="cloud-image alt-image absolute"
              ></CldImage>
              <div className="flex absolute year-text-bg justify-center items-center bottom-[0%] w-[100%] h-[15%]">
                <p className="prime-font text-2xl">'21</p>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="name block relative mt-[18rem] 2xl:mt-[20rem] ml-[4rem] z-[1000]">
              <b>
                <p className="hidden sm:block non-prime-font uppercase text-[4vw] text-[#ffe5d9] smoothed disable-select">
                  Sakir
                </p>
              </b>
              <b>
                <p className="hidden sm:block non-prime-font sm:text-[5vw] text-[#ffe5d9] smoothed disable-select">
                  Ashker
                </p>
              </b>
            </div>
            <div className="sm:hidden absolute w-[95px]">
              <p className="relative text-[#ffe5d9] text-3xl font-[Cousine] mt-[25rem] z-[40] text-center">
                SHE
                <br />
                KNOWS
              </p>
            </div>
          </Fade>
        </div>
        {/* Middle */}

        <div className="sm:hidden flex relative justify-center items-center w-[35%]">
          <Zoom>
            <div className="flex dp-border justify-center items-center ">
              <div className="flex dp relative justify-center overflow-hidden">
                <div className="absolute left-[3px] z-[1050] cookie-text">
                  <ReactCurvedText
                    width="500"
                    height="300"
                    cx="167"
                    cy="180"
                    rx="147"
                    ry="151"
                    startOffset="50"
                    reversed={true}
                    text="'till the retrograde is done"
                    textProps={{ style: { fontSize: 20 } }}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                    className="cookie-text"
                  />
                </div>
                <div className="absolute left-[0%] h-full w-full bg-[]">
                  <CldImage
                    width={1000}
                    height={2000}
                    src={process.env.NEXT_PUBLIC_DP}
                    alt="of Your"
                    className="cloud-dp"
                  />
                </div>
              </div>
            </div>
          </Zoom>
        </div>

        <div className="hidden sm:flex relative justify-center items-center w-[35%]">
          <Zoom>
            <div className="flex dp-border justify-center items-center ">
              <div className="flex dp relative justify-center overflow-hidden">
                <div className="absolute left-[3px] z-[1050] cookie-text">
                  <ReactCurvedText
                    width="500"
                    height="300"
                    cx="182"
                    cy="180"
                    rx="155"
                    ry="151"
                    startOffset="57"
                    reversed={true}
                    text="'till the retrograde is done"
                    textProps={{ style: { fontSize: 20 } }}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                    className="cookie-text"
                  />
                </div>
                <div className="absolute left-[0%] h-full w-full bg-[]">
                  <CldImage
                    width={1000}
                    height={2000}
                    src={process.env.NEXT_PUBLIC_DP}
                    alt="of Your"
                    className="cloud-dp"
                  />
                </div>
              </div>
            </div>
          </Zoom>
        </div>

        {/* Right */}
        <Fade right>
          <div className="flex relative items-center  w-[35%] dp-container">
            <div className="sm:hidden absolute ">
              <p className="relative text-[#ffe5d9] text-3xl font-[Cousine] ml-[1rem] mt-[-15rem] z-[40]">
                YES
                <br />
                INDEED
              </p>
              <p className="text-3xl font-[Cousine] outline-text text-[white] ml-[4rem] mt-[-1rem] z-[20]">
                YES
                <br />
                INDEED
              </p>
            </div>
            <div className="hidden sm:flex absolute dp-01   left-[35%] w-[305px] rounded-[3rem] showBorder overflow-hidden">
              <CldImage
                src={process.env.NEXT_PUBLIC_PRIMARY}
                width="5000"
                height="5000"
                className="hover:scale-110 duration-500 ease-out"
                alt="Silly Shit"
              ></CldImage>
            </div>
          </div>
        </Fade>
      </div>
      <div className="absolute justify-between relative small-show sm:hidden h-[100vh] gap-[2rem]">
        <Slide left>
          <div className="flex flex-col  justify-end h-[50%] pl-[2rem] pb-[1rem] quote-font text-[#7C7C7C]">
            The eyes, the contents <br />
            Coffee and sunsets <br /> The walk, the hair <br />
            Sweetens the air
          </div>
        </Slide>
        <Slide right>
          <div className="pr-[2rem] pt-[1rem] text-right quote-font text-[#7C7C7C]">
            BW or vivid <br />
            Films, we love it <br /> Slumberous nd morning
            <br /> Music,keep breathing
          </div>
        </Slide>
        <div className="name absolute top-[0%] z-[1000]">
          <b>
            <p className="non-prime-font uppercase sm:text-[4vw] text-[#ffe5d9] smoothed disable-select">
              Sakir
            </p>
          </b>
          <b>
            <p className="non-prime-font sm:text-[5vw] text-[#ffe5d9] smoothed disable-select">
              Ashker
            </p>
          </b>
        </div>
        <Image
          src={cf}
          className="cf"
          alt="cool right?"
        />
        <div className="override-line">
          <div className="flex absolute bg-[black] w-[200px] dp-small top-[10%] right-[0%] overflow-hidden opacity-[1]">
            <CldImage
              src={process.env.NEXT_PUBLIC_PRIMARY}
              width="5000"
              height="5000"
              alt="of Your"
              className="hover:scale-110 duration-500 ease-out z-[300]"
            ></CldImage>
          </div>
        </div>
        <div className="flex absolute dp-02 w-[250px] h-[270px] rounded-[0.3rem] overflow-hidden opacity-[0.7] bottom-[7%] z-[100]">
          <CldImage
            src={process.env.NEXT_PUBLIC_SECONDARY}
            width={3000}
            height={3000}
            alt="Silly Shitt"
            className="cloud-image absolute"
          ></CldImage>
        </div>
      </div>
    </section>
  );
};

export default Display;
