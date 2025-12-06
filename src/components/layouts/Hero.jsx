import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import HeroContentImg from "/src/assets/heroContent.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-cover bg-center py-[200px]">
        <Container>
          <div className="w-[686px]">
            <Image src={HeroContentImg} alt={HeroContentImg}/>
            <Heading className={"text-[#192239] text-[72px] font-openSans font-extrabold leading-[98px] pt-5"} text={"We Are Digital #Marketing# Agency"} as="h1"/>
            <p className="w-[550px] text-[#6C7D93] text-xl font-paprika leading-9 py-5">Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
            <Button className={'text-white text-lg font-semibold'} btnTxt={'Get Free Quoto'}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
