import logo from './logo.svg';
import './App.css';

function App() {
  const test = async () => {
    const data = await fetch("http://localhost:5000/api").then (response => response.json())
    .then(json => json)
    .catch(e => e)
    console.log(data)
    return data
  }
  test()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
