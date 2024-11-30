import './App.css';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
    </div>
    </AuthProvider>
  );
}

export default App;
