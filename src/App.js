
import './App.css';
import Secondnavbar from './component/Secondnavbar/Secondary.jsx';
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
       <Secondnavbar/>
       <CardDetailsHeader/>
       <CardDetailsHighLights/>
       <CardDetailsFinancialOverview/>
       <CardDetailsWebinars/>
       <CardDetailsLocation/>
       <CardDetailsFooter/>
   
     
    </div>

  );
}
export default App;