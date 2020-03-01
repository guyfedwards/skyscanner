import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`;

const Agent = styled(BpkText)`
  color: #aba9a9;
  line-height: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ResultFooter = ({ agent, price }) => (
  <Root>
    <Left>
      <BpkText textStyle="xxl">{price}</BpkText>
      <Agent textStyle="lg">{agent}</Agent>
    </Left>
    <Right>
      <BpkButton large>Select</BpkButton>
    </Right>
  </Root>
);

ResultFooter.propTypes = {
  agent: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};

export default ResultFooter;
