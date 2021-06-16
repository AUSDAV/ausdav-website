import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import ResultsPage from './pages/results';
import VideoPage from './pages/video';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/results" component={ResultsPage} exact />
        <Route path="/videos" component={VideoPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
