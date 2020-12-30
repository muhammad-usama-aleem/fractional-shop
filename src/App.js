<<<<<<< HEAD
import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import Sort from './component/Sort/Sort';
import Cardlist from './component/Cardlist/Cardlist';
import Filters from './component/Filters/Filters';
import SignIn from './component/Authentication/SignIn/SignIn';
import CardDetailsHighLights from './component/CardDetailsHighLights/CardDetailsHighLights';
import CardDetailsFinancialOverview from './component/CardDetailsFinancialOverview/CardDetailsFinancialOverview';
import CardDetailsWebinars from './component/CardDetailsWebinars/CardDetailsWebinars';
import CardDetailsLocation from './component/CardDetailsLocation/CardDetailsLocation';
import CardDetailsFooter from './component/CardDetailsFooter/CardDetailsFooter';
import SharePopUp from './component/SharePopUp/SharePopUp';
import CardDetailsHeader from './component/CardDetailsHeader/CardDetailsHeader';
function App() {
  return (
    <div>
      <CardDetailsHeader/>
    </div>

  );
}

=======
import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import Sort from './component/Sort/Sort';
import Cardlist from './component/Cardlist/Cardlist';
import Filters from './component/Filters/Filters';
import SignIn from './component/Authentication/SignIn/SignIn';
import CardDetailsHeader from './component/CardDetailsHeader/CardDetailsHeader';

function App() {
  return (
    <div>
      <Navbar />
      <div className="MIAdiffer">
        {/* <SignIn /> */}
        {/* <Filters />
        <Sort />
        <Cardlist /> */}
        <CardDetailsHeader />
      </div>
    </div>
  );
}

>>>>>>> 8e86baabbcfb1104103ed668012be347355d6ae7
export default App;