import React, {Component, Fragment } from "react";
import './App.css';
import { Header, Sidebar, Chat, Login } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useStateValue } from "./Context/StateProvider";

const App = ()=> {
  //const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {/* Header*/}
        {!user ? (
          <Login />
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </Router>
  
    </div>
  );
}

export default App;
