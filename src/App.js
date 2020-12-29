import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import Sort from './component/Sort/Sort';
import Cardlist from './component/Cardlist/Cardlist';
import Filters from './component/Filters/Filters';

function App() {
  return (
    <div>
      <Navbar />
      <div className="MIAdiffer">
        <Filters />
        <Sort />
        <Cardlist />
      </div>
    </div>
  );
}

export default App;
