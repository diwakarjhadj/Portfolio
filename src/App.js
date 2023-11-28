// import './App.css';
import Navbar from './comp/Navbar';
import About from './comp/About';
import Skills from './comp/Skills';
import Project from './comp/Project';
import Resume from './comp/Resume';
import Contact from './comp/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <About/>
        <Skills/>
        <Project/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
