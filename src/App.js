import './App.css';
import AddDreamBtn from './components/addDreamBtn';
import DreamJournal from './components/DreamJournal';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Navbar}/>
        <Route exact path="/DreamJournal" component={DreamJournal}/>
        </Switch>
        <AddDreamBtn/>
      </Router>
    </div>
  );
}

export default App;
