import propTypes from 'prop-types';

import legType from './leg';

export default propTypes.exact({
  id: propTypes.string,
  legs: propTypes.arrayOf(legType),
  price: propTypes.string,
  agent: propTypes.string,
  agent_rating: propTypes.number,
});
