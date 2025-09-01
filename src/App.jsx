import Contact from "./Contact";
import Education from "./Education";
import Introduction from "./Introduction";
import Projects from "./Projects";
// import Resume from "./Resume";
import Skills from "./Skills";

function App() {
  return (
    <>
      <div>
        
        <Introduction></Introduction>
        {/* <Resume></Resume> */}
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
        
      </div>
    </>
  );
}

export default App;
