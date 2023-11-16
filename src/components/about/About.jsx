import { Component } from 'react';
import girl from '/girl.jpg';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 70px;
`;

class About extends Component {
  render() {
    return (
      <Section>
        {/* <div>
          <img src={girl} alt='Girl' />
        </div> */}
      </Section>
    );
  }
}

export default About;
