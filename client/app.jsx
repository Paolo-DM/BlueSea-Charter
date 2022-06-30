import React from 'react';
import jwtDecode from 'jwt-decode';
import AppContext from './lib/app-context';
import { parseRoute } from './lib';
import NotFound from './pages/not-found';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Fleet from './pages/Fleet';
import Excursions from './pages/Excursions';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Amalfi from './pages/Amalfi';
import ExcursionDetails from './pages/ExcursionDetails';
import Success from './pages/Success';
import Canceled from './pages/Canceled';
import Wedding from './pages/Wedding';
import Diving from './pages/Diving';
import Sunset from './pages/Sunset';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
    const token = window.localStorage.getItem('bluesea-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('bluesea-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('bluesea-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'excursions') {
      return <Excursions />;
    }

    if (route.path === 'excursions/amalfi-coast') {
      return <Amalfi />;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ExcursionDetails productId={productId} />;
    }
    if (route.path === 'fleet') {
      return <Fleet />;
    }
    if (route.path === 'sign-up') {
      return <SignUp />;
    }
    if (route.path === 'sign-in') {
      return <SignIn />;
    }
    if (route.path === 'success') {
      return <Success />;
    }
    if (route.path === 'canceled') {
      return <Canceled />;
    }
    if (route.path === 'wedding') {
      return <Wedding productId={5}/>;
    }
    if (route.path === 'diving') {
      return <Diving productId={6}/>;
    }
    if (route.path === 'sunset') {
      return <Sunset productId={7}/>;
    }
    return <NotFound />;
  }

  render() {
    if (this.state.isAuthorizing) return null;
    const { user, route } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
      <AppContext.Provider value={contextValue}>
      <>
        <Navbar/>

        { this.renderPage() }
      </>
      <Footer />
      </AppContext.Provider>
    );
  }
}
