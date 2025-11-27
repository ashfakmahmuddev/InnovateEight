import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import logo from "./../../assets/logo.png";

const Header = () => {
  return (
    <div className="mt-[30px]">
      <Container>
        <Flex className={`justify-between`}>
          <div className="">
            <Image src={logo}/>
          </div>
          <div className="">1</div>
          <div className="text-white text-lg font-semibold">
            <Button btnTxt={"Contact Us"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
