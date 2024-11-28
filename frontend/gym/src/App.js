import './App.css';
import LoginButton from './components/LoginButton';
import RegisterButton from './components/RegisterButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LoginButton />
       <RegisterButton/>
      </header>
    </div>
  );
}

export default App;
