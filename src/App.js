import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home'
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";
import NoMatch from "./components/NoMatch/NoMatch.js";

function App() {

  return (
   
    <div >

 <Router>
     <Switch>
     <Route path ="/home">
      <Home></Home>
     </Route>
     <Route path ="/leagues/:idLeague">
     <LeagueDetail></LeagueDetail>
     </Route>
     <Route exact path = "/">
     <Home></Home>
     </Route>
     <Route path="*">
            <NoMatch></NoMatch>
      </Route>
     </Switch>
   </Router>
       
    </div>
  );
}

export default App;
