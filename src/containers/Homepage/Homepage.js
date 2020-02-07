import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'
import { getProducts } from '../../store/actions/home';
import Header from '../../components/Header'
import Body from '../../components/Body'
import { LoopCircleLoading } from 'react-loadingg';

export const Wrapper = styled.div`
`

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: {
        q: '',
        styles: []
      }
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (obj) {
    this.setState({
      search: obj
    });
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <>
        <Wrapper>
          {
            this.props.loading && 
             <>
              <LoopCircleLoading />
             </>
          }
          {
            this.props.products.length > 0 && !this.props.loading && 
              <>
                <Header searchJSON={this.state.search} onSearch={this.handleSearch} styles={this.props.furniture_styles} />
                <Body products={this.props.products} searchJSON={this.state.search} />
              </>
        }
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    furniture_styles: state.Home.furniture_styles,
    products: state.Home.products,
    loading: state.Home.loading
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
