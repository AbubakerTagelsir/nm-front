// header class component for the app
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">
                          <img src="img/logo.png" alt="logo" />
                      </a>
                  </div>
                  <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </div>
          </nav>
      </header>
    );
  }
}

export default Header;