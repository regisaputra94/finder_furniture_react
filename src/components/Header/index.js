import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import Helpers from 'app/helpers';

export const Wrapper = styled.div`
`

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/"><h1 className="site-title">TokoFlix</h1></Link>
        {/* <h3 className='balance'> { Helpers.convertToRupiah(this.props.account.balance) }</h3> */}
      </header>
    )
  }
}

export default Header

//http://www.mocky.io/v2/5c9105cb330000112b649af8