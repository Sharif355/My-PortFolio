import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <hr className="max-w-[1860px] mx-auto" />
      <Banner />
      <Skills />
      <Work />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
