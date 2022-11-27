import logo from './logo.svg';
import Nav from './Components/Nav';
import Loader from './Components/Loader';
import { useEffect, useState } from 'react';
import Landing from './Pages/Landing';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  const getData = async () => {
    setLoading(true);
    await fetch("/api").then (response => response.json())
    .then(json => {
      setData([...json]);
      setLoading(false);
    })
    .catch(e => console.log(e));
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
        {loading ? <Loader /> : (
          <>
            <Nav refresh={getData} />
            <Landing trains={data} />
          </>
        )}

    </div>
  );
}
export default App;
