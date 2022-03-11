import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Projects from './Projects';
import '../styles/reset.css';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;