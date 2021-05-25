import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'

import { Container } from 'react-bootstrap'; 
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
        <Router>
      <Header />
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
        
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Home}/>
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} /> 
              </Switch>
            </AuthProvider>
        
      </div>
        </Container>
        </Router>
      <About /> 
      <Footer /> 
  </AuthProvider>
  );
}

export default App;
