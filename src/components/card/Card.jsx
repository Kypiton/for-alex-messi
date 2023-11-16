/* eslint-disable react/prop-types */
import { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  padding: 25px 0;
`;

const CoffeeCard = styled.div`
  border-radius: 8px;
  background: #fff;
  padding: 37px 27px 22px 26px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
`;

const P = styled.p`
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 14px;
  text-align: right;
`;

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        {!this.props.cards.length ? (
          <h2>АДЖАМБИК</h2>
        ) : (
          this.props.cards.map(({ id, ...card }) => (
            <CoffeeCard key={id}>
              <img src={card.img} alt={card.name} />
              <P>{card.name}</P>
              <P>{card.country}</P>
              <P>{card.price}$</P>
            </CoffeeCard>
          ))
        )}
      </Wrapper>
    );
  }
}
