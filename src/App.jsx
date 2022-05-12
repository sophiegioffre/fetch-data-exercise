import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/50')
      .then(result => result.json())
      .then(data => setData(data));
  };

  useEffect(fetchData, []);
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Breaking Bad Quotes</h1>
      </header>
      
      <nav>
        <ul className='list-group'>
          {data.map((item, index) => (
            <li key={index} className='list-group-item'>
              <h3>{item.quote}</h3>
              <p>{item.author}</p>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
}

export default App;
