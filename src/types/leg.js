import propTypes from 'prop-types';

export default propTypes.exact({
  id: propTypes.string,
  departure_airport: propTypes.string,
  arrival_airport: propTypes.string,
  departure_time: propTypes.string,
  arrival_time: propTypes.string,
  stops: propTypes.number,
  airline_name: propTypes.string,
  airline_id: propTypes.string,
  duration_mins: propTypes.number,
});
