import React from 'react';
import { parseRoute } from './lib';
import NotFound from './pages/not-found';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Fleet from './pages/Fleet';
import Excursions from './pages/Excursions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    console.log('route:', this.state);
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    console.log('renderPage:', this.state.route);
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'excursions') {

      return <Excursions />;
    }
    if (route.path === 'fleet') {

      return <Fleet />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.renderPage() }

      </div>
    );
  }
}
