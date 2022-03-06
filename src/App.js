import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import NavRoot from './navigation/NavRoot';

function App() {
  return (
    <Router>
        <NavRoot/>
    </Router>
  );
}

export default App;
