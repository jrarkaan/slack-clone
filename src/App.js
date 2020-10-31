import './App.css';
import { Header, Sidebar } from './components';
function App() {
  return (
    <div className="App">
      {/* Header*/}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-router -> chat screen */}
      </div>
    </div>
  );
}

export default App;
