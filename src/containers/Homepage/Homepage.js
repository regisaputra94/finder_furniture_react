import React from "react";
import styled from 'styled-components';
import logo from '../../logo.svg';

export const WrapDivFlex = styled.div`
  width: 35%;
  overflow: hidden;
`

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
              Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
              </a>
          </header>
        </div>
      </>
    );
  }
}

export default Home;
