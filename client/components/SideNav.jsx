import React, { Component } from 'react';
import { Link, Navigate} from 'react-router-dom';

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <a href="#section">Account</a>
        <br></br>
        <br></br>
        {/* <a href="#section">
          <button>Create Course</button>
        </a> */}
        <Link className="loginPageButton" to={'/create'}>
          <button>Create Course</button>
        </Link>
      </div>     
    );
  }
}

export default SideNav;