
import Image from './Image'
import HeroImg from './../assets/hero.jpg'
import HeroContent from './../assets/heroContent.png'
import Container from './Container'
import Button from './Button'

const Hero = () => {
  return (
    <>
    <Image src={HeroImg} className={`w-full h-screen relative`}/>
    <Container>
        <div className="absolute w-[686px] top-[300px]">
            <Image src={HeroContent}/>
            <h1 className='text-[#192239] text-[72px] leading-[98px] font-extrabold py-6'>We Are Digital <span className='text-[#FF7628]'>Marketing</span> Agency</h1>
            <p className='w-[550px] text-[#6C7D93] text-xl font-paprika leading-[36px] pb-10'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
            <Button btnTxt={'get free quoto'} className={`capitalize text-white text-xl font-openSans font-bold`}/>
        </div>
    </Container>
    </>
  )
}

export default Hero