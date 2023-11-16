import { Component } from 'react';
import girl from '/girl.jpg';
import coffee from '/coffee-beans.png';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 70px 350px 0 350px;
`;

const H2 = styled.h2`
  font-family: Merienda;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Span = styled.span`
  text-align: justify;
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

class About extends Component {
  render() {
    return (
      <Section>
        <div>
          <img src={girl} alt='Girl' />
        </div>
        <div>
          <H2>About our beans</H2>
          <div>
            <div></div>
            <img src={coffee} alt='' />
            <div></div>
          </div>
          <Span>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention so
            questions. As greatly removed calling pleased improve an. Last ask him cold feel met
            spot shy want. Children me laughing we prospect answered followed. At it went is song
            that held help face.
          </Span>
        </div>
      </Section>
    );
  }
}

export default About;
