import Container from "../Container";
import Image from "../Image";
import Heading from "../Heading";
import HeroContentImg from "/src/assets/heroContent.png";
import { Link } from "react-router-dom";

const Portfolio = ({ className }) => {
  return (
    <>
      <div className={`pt-[180px] pb-25 ${className}`}>
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
              text={"Work Showcase "}
              as={"h3"}
            />
            <ul className="flex items-center justify-center gap-x-10 pt-6">
              <li>
                <Link className="text-[#6C7D93] text-2xl font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400">
                  All
                </Link>
              </li>
              <li>
                <Link className="text-[#6C7D93] text-2xl font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400">
                  Digital Mkt
                </Link>
              </li>
              <li>
                <Link className="text-[#6C7D93] text-2xl font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400">
                  Branding
                </Link>
              </li>
              <li>
                <Link className="text-[#6C7D93] text-2xl font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400">
                  Content Mkt
                </Link>
              </li>
              <li>
                <Link className="text-[#6C7D93] text-2xl font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400">
                  Social Media Mkt
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div className="w-[275px] h-[345px] bg-[#C4C4C4] rounded-[20px]"></div>
            <div className="w-[560px] h-[345px] bg-[#C4C4C4] rounded-[20px]"></div>
            <div className="w-[275px] h-[345px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
          <div className="flex justify-between mt-[30px]">
            <div className="w-[415px] h-[345px] bg-[#C4C4C4] rounded-[20px]"></div>
            <div className="w-[325px] h-[345px] bg-[#C4C4C4] rounded-[20px]"></div>
            <div className="w-[370px] h-[345px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;

