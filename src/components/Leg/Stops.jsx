import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.span`
  color: ${({ direct }) => (direct ? '#00a698' : '#d1435b')};
`;

const Stops = ({ stops }) => {
  const direct = stops === 0;
  const text = direct ? 'Direct' : `${stops} stop ${stops > 1 ? 's' : ''}`;

  return <Root direct={direct}>{text}</Root>;
};

Stops.propTypes = {
  stops: propTypes.number.isRequired,
};

export default Stops;
