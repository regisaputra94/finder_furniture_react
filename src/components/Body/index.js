import React, { Component } from 'react'
import styled from 'styled-components';
import _lowerCase from 'lodash/lowerCase';

export const Container = styled.div`
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const WrapperItem = styled.div`
  display: inline-block;
  width: 43%;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 2rem;

  &:nth-child(odd) {
    margin-right: 2rem;
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`

export const FlexItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Price = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #eba834;
`

export const Styles = styled.div`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: #348feb;
`

export const Time = styled.div`
  float: right;
  font-weight: 800;
  color: #3456eb;
  border-bottom: 1px solid #3456eb;
`

class Body extends Component {
  renderProductsData() {
    const { products, searchJSON } = this.props
    let results = products;

    if (searchJSON['q']) {
      results = products.filter(product => {
        return (_lowerCase(product.name)).indexOf(_lowerCase(searchJSON.q)) >= 0;
      });
    }

    if (searchJSON['styles'].length > 0) {
      let data = []
      products.filter(product => {
        searchJSON.styles.map((style, idx) =>  {
          if((product.furniture_style).indexOf(style) >= 0) {
            if(data.indexOf(product) < 0) {
              data.push(product)
            }
          }
        })
        return data;
      });

      results = data;
    }

    return results;
  }

  intToIDR (nominal) {
    var numberString = nominal.toString()
    var sisa = numberString.length % 3
    var rupiah = numberString.substr(0, sisa)
    var ribuan = numberString.substr(sisa).match(/\d{3}/g)

    if (ribuan) {
      var separator = sisa ? ',' : ''
      rupiah += separator + ribuan.join(',')
    }

    return rupiah
  }

  render() {
    const products = this.renderProductsData()
    return (
      <>
        <Container>
          <Wrapper>
            {
              products &&
                <>
                  {
                    products.map((product, index) => {
                      product.description = (product.description).substring(0, 114)
                      product.priceIDR = this.intToIDR(product.price)

                      return (
                        <WrapperItem key={index}>
                          <FlexItem>
                            <Name>{product.name}</Name>
                            <Price>Rp. {product.priceIDR}</Price>
                          </FlexItem>
                          <div>{product.description}</div>
                          <Styles>
                            {
                              product.furniture_style && 
                                <>
                                  {
                                    product.furniture_style.map((style, idx) => {
                                      let text = '';
                                      if (idx > 0) {
                                        text += ', ';
                                      }
                                      text += style;

                                      return (
                                        <span key={idx}>{text}</span>
                                      )
                                    })
                                  }
                                </>
                            }
                          </Styles>
                          <Time>{product.delivery_time} Days</Time>
                        </WrapperItem>
                      )
                    })
                  }
                </>
            }
          </Wrapper>
        </Container>
      </>
    )
  }
}

export default Body;