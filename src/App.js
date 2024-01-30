import './App.css';
import { useState } from "react";
import './assets/styles/main.scss'
import Search from './components/Search/Search';
import List from './components/List/List';
import Loader from './components/Loader/Loader';

function App() {
  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const searchStackOverflow = async (query) => {
    try {
      setResults([]);
      setIsLoading(true);
      fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`)
        .then(response => response.json())
        .then(data => setResults(data.items.sort((a, b) => b.answer_count - a.answer_count)))
        .catch(error => console.error('Error fetching Stack Overflow data:', error));
    } catch (error) {
      console.error('Error fetching Stack Overflow data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="main">
      <Search onSearchExc={searchStackOverflow}></Search>
      {isLoading ? <Loader /> : <List results={results}></List>}
    </main>
  );
}

export default App;
