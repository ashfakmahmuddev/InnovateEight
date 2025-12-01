import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import RootLayout from "./components/layouts/RootLayout";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Price from "./components/pages/Price";
import Blog from "./components/pages/Blog";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Price" element={<Price/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route inpath="*"dex element={<Error />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
