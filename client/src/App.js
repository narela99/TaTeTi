import logo from './logo.svg';
import './App.css';
import Grilla from './components/grilla';
import Puntaje from './components/puntaje';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grilla/>
        {/* <Puntaje/> */}
      </header>
    </div>
  );
}

export default App;
