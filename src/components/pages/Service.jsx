import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import HeroContentImg from "/src/assets/heroContent.png";
import readMore from "/src/assets/readMore.png";
import service1 from "/src/assets/service1.png";
import service2 from "/src/assets/service2.png";
import service3 from "/src/assets/service3.png";

const Service = ({ className }) => {
  return (
    <>
      <div className={`pt-40 pb-[100px] ${className}`}>
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
              text={"Our Services"}
              as={"h3"}
            />
            <p className="w-[300px] mx-auto text-[#6C7D93] text-lg font-paprika leading-8 pt-2">
              We have been providing great flooring solutions service.
            </p>
          </div>
          <Flex className={"grid grid-cols-3 gap-[30px]"}>
            <div className="px-10 py-[52px] bg-[#EBF7E9] text-center rounded-[20px]">
              <Image
                src={service1}
                alt={service1}
                className={"block mx-auto"}
              />
              <Heading
                className={
                  "text-[#202427] text-[25px] font-openSans font-bold pt-7 capitalize"
                }
                text={"Marketing startegy"}
                as={"h3"}
              />
              <p className=" mx-auto text-[#6C7D93] text-lg font-paprika leading-[30px] py-5">
                Social Media has changed the way we interact & do business while
                creating a new avenue.
              </p>
              <Link>
                <Image
                  src={readMore}
                  alt={readMore}
                  className={"block mx-auto"}
                />
              </Link>
            </div>
            <div className="px-10 py-[52px] bg-[#D8EAFF] text-center rounded-[20px]">
              <Image
                src={service2}
                alt={service2}
                className={"block mx-auto"}
              />
              <Heading
                className={
                  "text-[#202427] text-[25px] font-openSans font-bold pt-7 capitalize"
                }
                text={"Social Marketing"}
                as={"h3"}
              />
              <p className="mx-auto text-[#6C7D93] text-lg font-paprika leading-[30px] py-5">
                Social Media has changed the way we interact & do business while creating a new avenue.
              </p>
              <Link>
                <Image
                  src={readMore}
                  alt={readMore}
                  className={"block mx-auto"}
                />
              </Link>
            </div>
            <div className="px-10 py-[52px] bg-[#FBF1EC] text-center rounded-[20px]">
              <Image
                src={service3}
                alt={service3}
                className={"block mx-auto"}
              />
              <Heading
                className={
                  "text-[#202427] text-[25px] font-openSans font-bold pt-7 capitalize"
                }
                text={"Content Marketing"}
                as={"h3"}
              />
              <p className="mx-auto text-[#6C7D93] text-lg font-paprika leading-[30px] py-5">
                Content Marketing is the other fold of online advertisement. If you are looking to build
              </p>
              <Link>
                <Image
                  src={readMore}
                  alt={readMore}
                  className={"block mx-auto"}
                />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Service;
