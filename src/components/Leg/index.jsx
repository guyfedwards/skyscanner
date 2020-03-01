import React from 'react';
import styled from 'styled-components';
import BpkImage from 'bpk-component-image';
import BpkSmallArrow from 'bpk-component-icon/sm/long-arrow-right';
import BpkText from 'bpk-component-text';

import legType from '../../types/leg';

import LegTime from './LegTime';
import Stops from './Stops';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & + & {
    margin-top: 10px;
  }
`;

const Left = styled.div`
  display: flex;
`;

const StyledImage = styled(BpkImage)`
  height: 32px;
  width: 32px;
`;

const LegTimes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledBpkSmallArrow = styled(BpkSmallArrow)`
  fill: #aba9a9;
`;

const Duration = styled(BpkText)`
  color: #aba9a9;
`;

const Leg = ({ leg }) => {
  const durationHours = Math.floor(leg.duration_mins / 60);
  const durationMins = leg.duration_mins % 60;

  return (
    <Root>
      <Left>
        <StyledImage
          altText={leg.airline_name}
          height={32}
          width={32}
          src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
        />
        <LegTimes>
          <LegTime time={leg.departure_time} airport={leg.departure_airport} />
          <Arrow>
            <StyledBpkSmallArrow />
          </Arrow>
          <LegTime time={leg.departure_time} airport={leg.departure_airport} />
        </LegTimes>
      </Left>
      <Right>
        <Duration>
          {durationHours}h {durationMins}
        </Duration>
        <Stops stops={leg.stops} />
      </Right>
    </Root>
  );
};

Leg.propTypes = legType.isRequired;

export default Leg;
