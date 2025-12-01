import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import logo from "./../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="mt-[30px] w-[1170px] z-10">
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
                  Home <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link
                  to={"/About"}
                  className="flex items-center gap-x-1.5 text-[#192239] text-lg font-openSans font-semibold"
                >
                  About <FaAngleDown />
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
                  Portfolio <FaAngleDown />
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
                  Blog <FaAngleDown />
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-lg font-semibold">
            <Button btnTxt={"Contact Us"} />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Header;

//
//
//
//
//
