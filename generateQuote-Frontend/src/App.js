import './App.css';
import Quote from './Components/Quote';
import SearchBar from './Components/SearchBar';
import { QuoteProvider } from './Context/QuoteContext';

function App() {
  return (
    <QuoteProvider>
      <div className="App">
        <SearchBar></SearchBar>
        <Quote></Quote>
      </div>
    </QuoteProvider>

  );
}

export default App