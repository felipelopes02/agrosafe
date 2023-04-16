import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import LoginForm from './components/loginform';
import LoginPage from './pages/login';
import Rotas from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <Rotas/>
    </div>
  );
}

export default App;
