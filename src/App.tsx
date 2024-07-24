import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Repos from './features/Repos';
import CommitDetails from './features/CommitDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Repos />} />
          <Route path="/details/:name" element={<CommitDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
