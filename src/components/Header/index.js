import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import Helpers from 'app/helpers';

export const Container = styled.div`
  background: #348feb;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const SearchInput = styled.input`
  width: 100%;
  color: white;
  background: #348feb;
  border: none;
  border-bottom: 1px solid white;
  outline: none; 
  padding: .7rem 0;
  font-size: 1.7rem;
  font-weight: bold;
  
  ::placeholder {
    color: white;
    font-size: 1.7rem;
    font-weight: bold;
  }
`

export const WrapperItem = styled.div`
  display: inline-block;
  width: 48%;
  margin-top: 2rem;

  &:nth-child(odd) {
    margin-right: 2rem;
  }
`

export const DropdownDiv = styled.div`
  position: relative;

  span {
    font-size: 1.5rem;
    position: absolute;
    top: .2rem;
    right: 1rem;
  }  
`
  
export const DropdownFilter = styled.input`
  width: 97%;
  outline: none;
  padding: .7rem;
  font-size: 1rem;
`

export const DropdownContent = styled.div`
  border: 1px solid rgba(27, 24, 38, .2);
  border-radius: 2px;
  width: 43.6%;
  position: absolute;
  background: white;
`

export const FlexItem = styled.div`
  display: inline-block;
  width: 100%;
  justify-content: space-between;
  position: relative;

  &:hover {
    background: rgba(87, 198, 250, .2);
  }

  div {
    margin: .7rem; 
  }

  input {
    position: absolute;
    right: 1rem;
  }
`

const filterTime = [
  "1 week", "2 weeks", "1 month", "more"
]


class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dropdown: false,
      dropdownTime: false
    }

    this.onKeyupSearch = this.onKeyupSearch.bind(this);
    this.onFilterStyle = this.onFilterStyle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setWrapperRefTime = this.setWrapperRefTime.bind(this);
  }

  onKeyupSearch (event) {
    let searchJSON = this.props.searchJSON;
    const value = event.target.value;
    searchJSON['q'] = value;

    this.props.onSearch(searchJSON);
  }

  onFilterStyle (event) {
    let searchJSON = this.props.searchJSON;
    const value = event.target.value;
    const checked = event.target.checked;

    if(checked) {
      searchJSON['styles'].push(value);
    } else {
      searchJSON['styles'].splice((searchJSON['styles']).indexOf(value), 1);
    }

    this.props.onSearch(searchJSON);
  }

  handleDropdown (dropdown) {
    this.setState({
      dropdown: !dropdown
    })
  }

  handleDropdownTime (dropdown) {
    this.setState({
      dropdownTime: !dropdown
    })
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside (event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        dropdown: !this.state.dropdown
      })
    }

    if (this.wrapperRefTime && !this.wrapperRefTime.contains(event.target)) {
      this.setState({
        dropdownTime: !this.state.dropdownTime
      })
    }
  };

  setWrapperRef(node) {
    this.wrapperRef = node;
  };

  setWrapperRefTime(node) {
    this.wrapperRefTime = node;
  };

  render() {
    const { styles } =  this.props
    const { dropdown, dropdownTime } = this.state
    return (
      <>
        <Container>
          <Wrapper>
            <WrapperItem>
              <SearchInput placeholder='Search Furniture' type='text' value={this.props.searchJSON.q} onChange={this.onKeyupSearch} />
            </WrapperItem>
            <WrapperItem>
            </WrapperItem>
            <WrapperItem style={{ marginBottom: '2rem' }}>
              <DropdownDiv>
                <DropdownFilter onClick={() => { this.handleDropdown(dropdown) }} placeholder="Furniture Style" readOnly/>
                <span><i className="fa fa-sort-desc"></i></span>        
              </DropdownDiv>
              {
                this.state.dropdown && (
                <DropdownContent ref={this.setWrapperRef}>
                  {
                    styles && 
                      <>
                        {
                          styles.map((style, index) => 
                          (
                            <FlexItem key={index}>
                              <div>
                                <span>{style}</span>
                                <input type="checkbox" name={style} value={style} onChange={this.onFilterStyle} />
                              </div>
                            </FlexItem>
                          ))
                        }
                      </>
                  }
                </DropdownContent>
              )}
            </WrapperItem>
            <WrapperItem style={{ marginBottom: '2rem' }}>
              <DropdownDiv>
                <DropdownFilter onClick={() => { this.handleDropdownTime(dropdownTime) }} placeholder="Delivery Time" readOnly/>
                <span><i className="fa fa-sort-desc"></i></span>    
              </DropdownDiv>
              {
                this.state.dropdownTime && (
                <DropdownContent ref={this.setWrapperRefTime}>
                  {
                    filterTime && 
                      <>
                        {
                          filterTime.map((time, idx) => 
                          (
                            <FlexItem key={idx}>
                              <div>
                                <span>{time}</span>
                                <input type="checkbox" name={time} value={time} />
                              </div>
                            </FlexItem>
                          ))
                        }
                      </>
                  }
                </DropdownContent>
              )}
            </WrapperItem>
          </Wrapper>
        </Container>
      </>
    )
  }
}

export default Header;