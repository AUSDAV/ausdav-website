import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import ResultPage from './pages/results';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/results" component={ResultPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
