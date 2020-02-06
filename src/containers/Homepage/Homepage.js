import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'
import { getProducts } from '../../store/actions/home';
import logo from '../../logo.svg';
import Header from '../../components/Header'

export const Wrapper = styled.div`
`

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <>
        <Wrapper>
          <Header/>
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
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.Home.products
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    getProducts: (products) => dispatch(getProducts(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
