import Hero from "../layouts/Hero"
import About from "./About"
import Service from "./Service"

const Home = () => {
  return (
    <>
      
      <Hero/>
      <Service className={'mt-[-100px]'}/>
      <About className={'mt-[-100px]'}/>

    </>
  )
}

export default Home