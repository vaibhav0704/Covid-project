import './App.css';
import SignupPage from './SignupPage';
import LandingPage from './LandingPage';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';


function App() {

  

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; 
