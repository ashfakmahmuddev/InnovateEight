import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Hero from "../layouts/Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Service from "./Service";
import HeroContentImg from "/src/assets/heroContent.png";
import process1 from "/src/assets/process1.png";
import process2 from "/src/assets/process2.png";
import process3 from "/src/assets/process3.png";
import review from "/src/assets/review.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Service className={"mt-[-100px]"} />
      <About className={"mt-[-100px]"} />
      <Portfolio className={"mt-[-100px]"} />

      {/* Process Part Start */}
      <div className="pt-10 pb-25">
        <Container>
          <div className="text-center pb-[50px]">
            <Image
              src={HeroContentImg}
              alt={HeroContentImg}
              className={"block mx-auto"}
            />
            <Heading
              className={
                "text-[#192239] text-[48px] font-openSans font-extrabold pt-2"
              }
              text={"Our creative process."}
              as={"h3"}
            />
            <p className="w-[480px] mx-auto text-[#6C7D93] text-lg font-paprika leading-8 pt-2">
              We provide digital experience services to startups and small
              businesses.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Image src={process1} alt={process1} />
            <div className="w-[570px] h-[325px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[570px] h-[325px] bg-[#C4C4C4] rounded-[20px]"></div>
            <Image src={process2} alt={process2} />
          </div>
          <div className="flex justify-between items-center">
            <Image src={process3} alt={process3} />
            <div className="w-[570px] h-[325px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
        </Container>
      </div>
      {/* Process Part End */}

      {/* Review Part Start */}
      <div className="py-10">
        <Container>
          <div className={"grid grid-cols-3 gap-x-10"}>
            <div className="w-[350px]">
              <Image src={HeroContentImg} alt={HeroContentImg} className={""} />
              <Heading
                className={
                  "text-[#192239] text-[48px] font-openSans font-extrabold pt-2"
                }
                text={"Client Review"}
                as={"h3"}
              />
              <p className="w-[345px] mx-auto text-[#6C7D93] text-lg font-paprika leading-8 pt-2">
                people use digital devices instead of visiting physical shops,
                digital marketing campaigns are becoming more prevalent and
                efficient.
              </p>
              <div className="flex items-center gap-x-6 pt-6">
                <Link className="text-[64px] text-[#FF7628] hover:text-[#fee2d3] transition-all duration-400">
                  <IoIosArrowDropleftCircle />
                </Link>
                <Link className="text-[64px] text-[#FF7628] hover:text-[#fee2d3] transition-all duration-400">
                  <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <div className="p-8 shadow-sm rounded-[20px] hover:bg-[#D8EAFF] transition-all duration-400">
              <p className="text-[#6C7D93] text-lg font-paprika leading-[30px] pb-10">
                Content Marketing is the other fold of online advertisement. If
                you are looking to build. digital marketing campaigns are
                becoming more prevalent and efficient.
              </p>
              <Flex className={"items-center justify-between"}>
                <Image src={review} alt={review} />
                <div className="text-[#202427]">
                  <h4 className="text-2xl font-semibold pb-2">Jane Cooper</h4>
                  <span className="text-xl">Fashion Designer</span>
                </div>
              </Flex>
            </div>
            <div className="p-8 shadow-sm rounded-[20px] hover:bg-[#D8EAFF] transition-all duration-400">
              <p className="text-[#6C7D93] text-lg font-paprika leading-[30px] pb-10">
                Content Marketing is the other fold of online advertisement. If
                you are looking to build. digital marketing campaigns are
                becoming more prevalent and efficient.
              </p>
              <Flex className={"items-center justify-between"}>
                <Image src={review} alt={review} />
                <div className="text-[#202427]">
                  <h4 className="text-2xl font-semibold pb-2">Jane Cooper</h4>
                  <span className="text-xl">Fashion Designer</span>
                </div>
              </Flex>
            </div>
          </div>
        </Container>
      </div>
      {/* Review Part End */}

      <Blog className={"mt-[-100px]"} />
    </>
  );
};

export default Home;
