import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import logo from "./../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full mx-auto py-5 bg-white z-10 shadow-[0_4px_10px_rgba(0,0,0,0.06)]">
      <Container className={""}>
        <Flex className={`justify-between items-center`}>
          <div className="">
            <Link to={"/"}>
              <Image src={logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-10">
              <li>
                <Link
                  to={"/"}
                  className="text-[#192239] text-lg font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/About"}
                  className="text-[#192239] text-lg font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/Service"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400"
                >
                  Service <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link
                  to={"/Portfolio"}
                  className="text-[#192239] text-lg font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={"/Price"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400"
                >
                  Price <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link
                  to={"/Blog"}
                  className="text-[#192239] text-lg font-openSans font-semibold hover:text-[#FF7628] transition-all duration-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-lg font-semibold">
            <Button btnTxt={"Contact Us"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
