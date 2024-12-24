import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login-page/Login.jsx'
import RepositoryPage from './components/Repository-page/RepositoryPage.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/repositories" element={<RepositoryPage></RepositoryPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
