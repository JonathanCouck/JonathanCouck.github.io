import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import HireMe from './components/HireMe';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App font-display text-text">
      <Header />
      <SideBar />
      <div className='text-left max-w-6xl pt-10 mx-auto space-y-32'>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <HireMe />
      </div>
    </div>
  );
}

export default App;
