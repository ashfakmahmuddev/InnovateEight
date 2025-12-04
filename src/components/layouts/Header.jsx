import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import logo from "./../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full mx-auto py-[20px] bg-white z-10 shadow-[0_4px_10px_rgba(0,0,0,0.06)]">
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
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/About"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/Service"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
                >
                  Service <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link
                  to={"/Portfolio"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={"/Price"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
                >
                  Price <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link
                  to={"/Blog"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
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
