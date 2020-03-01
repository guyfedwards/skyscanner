import React from 'react';
import BpkCard from 'bpk-component-card';
import styled from 'styled-components';

import flightType from '../../types/flight';
import ResultFooter from '../ResultFooter';
import Leg from '../Leg';

const StyledCard = styled(BpkCard)`
  :not(last-of-type) {
    margin-bottom: 20px;
  }
`;

const Result = ({ flight }) => (
  <StyledCard>
    {flight.legs.map(l => (
      <Leg leg={l} key={l.id} />
    ))}
    <ResultFooter agent={flight.agent} price={flight.price} />
  </StyledCard>
);

Result.propTypes = {
  flight: flightType.isRequired,
};

export default Result;
