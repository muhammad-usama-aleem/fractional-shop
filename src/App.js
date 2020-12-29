import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import Sort from './component/Sort/Sort';
import Cardlist from './component/Cardlist/Cardlist';
import Filters from './component/Filters/Filters';
import SignIn from './component/Authentication/SignIn/SignIn';
import CardDetailsHighLights from './component/CardDetailsHighLights/CardDetailsHighLights';

function App() {
  return (
    <div>
      <Navbar />
      <div className="MIAdiffer">
        <SignIn />
        {/* <Filters />
        <Sort />
        <Cardlist /> */}
        <CardDetailsHighLights />
      </div>
    </div>
  );
}

export default App;