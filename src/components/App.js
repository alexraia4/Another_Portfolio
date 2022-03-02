import GradientBar from './gradientBar';
import Introduction from './Introduction'
import Projects from './Projects'
import '../styles/reset.css';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <GradientBar />
      <Introduction />
      <Projects />
      <GradientBar />
    </div>
  );
}

export default App;