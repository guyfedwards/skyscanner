import React from 'react';
import BpkText from 'bpk-component-text';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;

  margin-right: 15px;
  margin-left: 15px;
`;

const Airport = styled(BpkText)`
  color: #aba9a9;
`;

const LegTime = ({ time, airport }) => {
  const localTime = new Date(time).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Root>
      <BpkText textStyle="lg">{localTime}</BpkText>
      <Airport textStyle="lg">{airport}</Airport>
    </Root>
  );
};

LegTime.propTypes = {
  airport: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};

export default LegTime;
