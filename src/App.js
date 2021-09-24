import './App.css';
import Header from "../src/components/Header"
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 

<Route path="/" component={LoginForm} exact />
<Route path="/register" component={RegisterForm} />
<Route path="/welcome" component={Welcome} />
<Route path="/error" component={Error} />
</Switch>
<Footer />
    </div>
  );
}

export default App;
