import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import HeroContentImg from "/src/assets/heroContent.png";
import readMore from "/src/assets/readMore.png";

const Blog = ({className}) => {
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
              text={"Our Latest Blog"}
              as={"h3"}
            />
            <p className="w-[400px] mx-auto text-[#6C7D93] text-lg font-paprika leading-8 pt-2">
              We provide digital experience services to startups and small businesses.
            </p>
          </div>
          <Flex className={"justify-between"}>
            <div className="shadow rounded-[20px]">
              <div className="w-[370px] h-60 bg-[#C4C4C4] rounded-t-[20px]"></div>
              <div className="p-[30px]">
                <h4 className="w-[205px] text-[#413F45] text-2xl font-openSans font-medium leading-8">How to Be Ahead of Stock Changes</h4>
                <h5 className="text-[#413F45] text-lg font-openSans pt-3 pb-4">By John  - 5 Comments</h5>
                <Image src={readMore} alt={readMore}/>
              </div>
            </div>
            <div className="shadow rounded-[20px]">
              <div className="w-[370px] h-60 bg-[#C4C4C4] rounded-t-[20px]"></div>
              <div className="p-[30px]">
                <h4 className="w-[215px] text-[#413F45] text-2xl font-openSans font-medium leading-8">Online Reputation And Management</h4>
                <h5 className="text-[#413F45] text-lg font-openSans pt-3 pb-4">By Amin  - 10 Comments</h5>
                <Image src={readMore} alt={readMore}/>
              </div>
            </div>
            <div className="shadow rounded-[20px]">
              <div className="w-[370px] h-60 bg-[#C4C4C4] rounded-t-[20px]"></div>
              <div className="p-[30px]">
                <h4 className="w-[265px] text-[#413F45] text-2xl font-openSans font-medium leading-8">Tips To Move Your Project More Forward</h4>
                <h5 className="text-[#413F45] text-lg font-openSans pt-3 pb-4">By Insider  - 15 Comments</h5>
                <Image src={readMore} alt={readMore}/>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Blog;
