import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

function App() {
  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap justify-center py-4">
        <Navbar></Navbar>
      </div>
      <Introduction></Introduction>
      <Resume></Resume>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
