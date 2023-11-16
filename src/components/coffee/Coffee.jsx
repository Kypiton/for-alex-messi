import { Component } from 'react';
import styled from 'styled-components';
import Card from '../card/Card';
import { cards } from '../../mock/data';

const Section = styled.section`
  padding: 60px 300px;
`;

const Line = styled.div`
  width: 240px;
  height: 1px;
  background: #000;
  margin: 0 auto;
`;

const Label = styled.label`
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const Input = styled.input`
  border-radius: 4px;
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Merienda;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
  padding: 6px 36px;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 60px;
`;

const WrapperSearch = styled.div``;

const WrapperFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 35px;
`;

const Countries = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Span = styled.span`
  border-radius: 4px 0px 0px 4px;
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Merienda;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px 20px;
  cursor: pointer;
`;

export default class Coffee extends Component {
  state = {
    name: '',
    cards,
  };

  onCoffeeValue = e => {
    this.setState({
      name: e.target.value.toLowerCase(),
    });
  };

  searchCoffee = () => {
    const { name, cards } = this.state;
    return cards.filter(card => card.name.toLowerCase().includes(name.toLowerCase()));
  };

  filteredByBrazil = () => {
    this.setState({
      cards: cards.filter(card => card.country === 'Brazil'),
    });
  };

  filteredByKenya = () => {
    this.setState({
      cards: cards.filter(card => card.country === 'Kenya'),
    });
  };

  filteredByColumbia = () => {
    this.setState({
      cards: cards.filter(card => card.country === 'Columbia'),
    });
  };

  allCoffees = () => {
    this.setState({ cards });
  };

  render() {
    const { name } = this.state;
    return (
      <Section>
        <Line></Line>
        <Wrapper>
          <WrapperSearch>
            <Label>
              Looking for:
              <Input
                name='coffee'
                placeholder='start typing here...'
                value={name}
                onChange={this.onCoffeeValue}
              />
            </Label>
          </WrapperSearch>
          <WrapperFilter>
            <P>Or filter</P>
            <Countries>
              <Span onClick={this.filteredByBrazil}>Brazil</Span>
              <Span onClick={this.filteredByKenya}>Kenya</Span>
              <Span onClick={this.filteredByColumbia}>Columbia</Span>
              <Span onClick={this.allCoffees}>All</Span>
            </Countries>
          </WrapperFilter>
        </Wrapper>
        <Card cards={this.searchCoffee()} />
      </Section>
    );
  }
}
