import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from './../../assets/logo.png'

const Footer = () => {
  return (
    <>
    <div className="bg-gray-100">
      <Container>
      <Flex className={`justify-between pt-[140px] pb-20`}>
        <div>
           <Image src={Logo}/>
           <p className='w-[450px] text-lg text-[#6C7D93] font-openSans leading-[180%] mt-11'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
        </div>
        <div className='font-semibold font-openSans'>
          <h3 className='text-2xl text-[#413F45] pb-12'>Features</h3>
          <ul className='text-[#6C7D93] text-xl h-60 flex flex-col justify-between capitalize'>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Benifit</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className='font-semibold font-openSans'>
          <h3 className='text-2xl text-[#413F45] pb-12'>Products</h3>
          <ul className='text-[#6C7D93] text-xl h-[132px] flex flex-col justify-between capitalize'>
            <li>
              <Link>Task Management</Link>
            </li>
            <li>
              <Link>Company growth</Link>
            </li>
            <li>
              <Link>Time tracking</Link>
            </li>
          </ul>
        </div>
        <div className='font-semibold font-openSans'>
          <h3 className='text-2xl text-[#413F45] pb-12'>Support</h3>
          <ul className='text-[#6C7D93] text-xl h-[132px] flex flex-col justify-between capitalize'>
            <li>
              <Link>Customer service</Link>
            </li>
            <li>
              <Link>Accessibility</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>
      </Flex>
      <Flex className={`justify-between items-center text-[#6C7D93] text-lg font-openSans py-[60px] capitalize`}>
        <p>@2025 Innovate. All rights reserved by <span className='text-teal-800 font-bold'>Ashfak Mahmud</span>.</p>
        <ul className='flex items-center gap-x-15'>
          <li>
            <Link>Privacy policy</Link>
          </li>
          <li>
            <Link>Terms & condition</Link>
          </li>
        </ul>
      </Flex>
    </Container>
    </div>
    </>
  )
}

export default Footer