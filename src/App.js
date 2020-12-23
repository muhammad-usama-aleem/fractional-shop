import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import Cardlist from './component/Cardlist/Cardlist';
import Filters from './component/Filters/Filters';

function App() {
  return (
    <div>
      <Navbar />
      <Filters />
      <Cardlist />
    </div>
  );
}

export default App;
