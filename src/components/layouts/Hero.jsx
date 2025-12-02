// import Button from "../Button"
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
// import Image from "../Image"
import HeroContent from "/src/assets/heroContent.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-cover bg-center py-[350px]">
        <Container>
          <div className="w-[686px]">
            <Image src={HeroContent} />
            <Heading text={"We Are Digital Marketing Agency"} as={"h1"} />
            <Heading className={"bg-amber-500"} text={"Jahin"} as={"p"} />
          </div>
        </Container>
        {/* <div className="w-[686px]">
            <Image src={HeroContent}/>
            <h1 className='text-[#192239] text-[72px] leading-[98px] font-extrabold py-6'>We Are Digital <span className='text-[#FF7628]'>Marketing</span> Agency</h1>
            <p className='w-[550px] text-[#6C7D93] text-xl font-paprika leading-[36px] pb-10'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
            <Button btnTxt={'get free quoto'} className={`capitalize text-white text-xl font-openSans font-bold`}/>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
