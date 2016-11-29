import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Navbar />
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
