import React from 'react';
import propTypes from 'prop-types';

import flightType from '../../types/flight';
import Result from '../Result';

const Results = ({ flights }) =>
  flights.map(f => <Result flight={f} key={f.id} />);

Results.propTypes = {
  flights: propTypes.arrayOf(flightType).isRequired,
};

export default Results;
