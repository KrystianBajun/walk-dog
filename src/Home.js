import React, { Component } from 'react';
import App from './App';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h5>
              You are logged in!{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>.
            </h5>
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container-column">
              <h5>Hello doggy owner !</h5>
              <h5>
                You are not logged in!

                Please{' '}
                <a
                  style={{ cursor: 'pointer' , color:'blue' }}
                  onClick={this.login}
                >
                  Log In
                </a>
                {' '}to continue.
              </h5>
              <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6>
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friendliest-dog-breeds-golden-1578596627.jpg?crop=0.668xw:1.00xh;0.188xw,0&resize=640:*" />

            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;
