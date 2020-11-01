import './App.css';
import { Header, Sidebar, Chat } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        {/* Header*/}
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route exact path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
          {/* React-router -> chat screen */}
        </div>
      </Router>
  
    </div>
  );
}

export default App;
