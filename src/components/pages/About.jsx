import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import aboutImg from "/src/assets/about.png";
import HeroContentImg from "/src/assets/heroContent.png";
import aboutContent1 from "/src/assets/aboutContent1.png";
import aboutContent2 from "/src/assets/aboutContent2.png";
import aboutContent3 from "/src/assets/aboutContent3.png";
import aboutContent4 from "/src/assets/aboutContent4.png";
import aboutContent5 from "/src/assets/aboutContent5.png";
import aboutContent6 from "/src/assets/aboutContent6.png";

const About = ({ className }) => {
  return (
    <>
      <div className={`pt-[200px] pb-20 ${className}`}>
        <Container>
          <Flex className={"grid grid-cols-2 gap-x-[150px]"}>
            <div className="">
              <Image src={aboutImg} alt={aboutImg} className={"w-full"} />
            </div>
            <div className="">
              <Image src={HeroContentImg} alt={HeroContentImg} className={""} />
              <Heading
                className={
                  "text-[#192239] text-[48px] font-openSans font-extrabold pt-2"
                }
                text={"Who We Are"}
                as={"h3"}
              />
              <p className="text-[#6C7D93] text-lg font-paprika leading-8 pt-2">
                We are a Dhaka based Digital Communication Agency committed to
                creating an actionable strategy, online marketing & technology
                solution for our partners. As a multidisciplinary company, we
                operate as a unified.
              </p>
              <span className="text-[#6C7D93] text-xs font-paprika pt-8 pb-12 block">Join the 10.000+ Companys Trusting</span>
              <Flex className={"grid grid-cols-3 pb-8"}>
                <Image src={aboutContent1} alt={aboutContent1} className={""}/>
                <Image src={aboutContent2} alt={aboutContent2} className={""}/>
                <Image src={aboutContent3} alt={aboutContent3} className={""}/>
              </Flex>
              <Flex className={"grid grid-cols-3"}>
                <Image src={aboutContent4} alt={aboutContent4} className={""}/>
                <Image src={aboutContent5} alt={aboutContent5} className={""}/>
                <Image src={aboutContent6} alt={aboutContent6} className={""}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default About;
