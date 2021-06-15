import './App.css';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
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
            <AuthProvider>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lessons' component={Lessons} />
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh" }}>
               <div className="w-100" style={{ maxWidth: "400px" }}>
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/profile' component={Profile} />
                </div>
              </Container>
              </Switch>
            </AuthProvider>
        </Router>
      <Footer /> 
  </AuthProvider>
  );
}

export default App;
