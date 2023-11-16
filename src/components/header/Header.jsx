import { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-image: url('/header.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 260px;
  padding: 60px 200px 0 200px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    li {
      list-style: none;
      color: #fff;
      font-family: Merienda;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

const H1 = styled.h1`
  font-family: Merienda;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: brown;
  text-align: center;
  margin-top: 60px;
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation>
          <ul>
            <li>Coffee house</li>
            <li>Our coffee</li>
            <li>For your pleasure</li>
          </ul>
        </Navigation>
        <H1>Our Coffee</H1>
      </Wrapper>
    );
  }
}
