import './App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/HomePage'
import {RegisterLessonPage} from './pages/RegisterLessonPage'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register-lessons" element={<RegisterLessonPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
