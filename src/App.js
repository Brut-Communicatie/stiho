import './App.css';
import Overview from './Components/Overview';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-202225891-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Overview />
    </div>
  );
}

export default App;
