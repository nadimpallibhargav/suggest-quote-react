import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[text, setText] = useState('');

  const fetch = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setText(advice);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <p>
        {text}
      </p>
    </div>
  );
}

export default App;
