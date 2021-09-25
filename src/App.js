import './App.css';
import Header from "../src/components/Header"
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import ErrorPage from './components/ErrorPage';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Switch> 

<Route path="/" component={LoginForm} exact />
<Route path="/register" component={RegisterForm} />
<Route path="/welcome" component={Welcome} />
<Route path="/error" component={ErrorPage} />
</Switch>
<Footer />
    </div>
  </Provider>
  );
}

export default App;
