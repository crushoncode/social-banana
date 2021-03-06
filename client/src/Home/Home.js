import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Register from './Register';
import Search from './Login/Search';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'login'
    };
  }

  handleFormToggle = (e) => {
    this.setState({ formState: e.target.name });
  };

  showUserForms = () => {
    const showUserForms = !this.props.loggedIn && (
      <React.Fragment>
        <div className="home-btn">
          <button id="home" name="login" onClick={this.handleFormToggle}>
            Login
          </button>
          <button id="home" name="register" onClick={this.handleFormToggle}>
            Register
          </button>
        </div>

        {this.state.formState === 'login' && (
          <Login
            loggedIn={this.props.loggedIn}
            handleLogin={this.props.handleLogin}
          />
        )}
        {this.state.formState === 'register' && (
          <Register handleRegister={this.props.handleRegister} />
        )}
      </React.Fragment>
    );
    return showUserForms;
  };

  render() {
    return (
      <React.Fragment>{this.showUserForms() || <Search />} </React.Fragment>
    );
  }
}

Home.propTypes = {
  loggedIn: PropTypes.bool,
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func
};

Home.defaultProps = {
  loggedIn: null,
  handleLogin: null,
  handleRegister: null
};

export default Home;
