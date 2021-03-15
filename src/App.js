import './App.css';
import AddDreamBtn from './components/addDreamBtn';
import DreamJournal from './components/DreamJournal';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import { DreamProvider } from './contextApi/DreamContext';
import FilterBasedOnDate from "./components/FilterBasedOnDate"
import DreamList from './components/DreamList';
import Calender from './components/calender';
import { SearchProvider } from './contextApi/dreamSearchapi';
function App() {
  return (
    <div className="App">
      <DreamProvider>
      <SearchProvider>
      <Router>
      <Navbar/>
      <Calender/>
        <Switch>
        <Route exact path="/" component={DreamList}/>
        <Route exact path="/DreamJournal" component={DreamJournal}/>
        <Route exact path="/Filter" component={FilterBasedOnDate}/>
        </Switch>
        
        <AddDreamBtn/>
      </Router>
      </SearchProvider>
      </DreamProvider>
    </div>
  );
}

export default App;
