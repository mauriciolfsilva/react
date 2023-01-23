import logo from './logo.svg';
import './App.css';
import FormHandler from './FormClass';

function App() {
  const myFormHandler = new FormHandler();
  // return myFormHandler;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
