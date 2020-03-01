import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import Result from '.';

const flight = {
  id: 'it_1',
  legs: [
    {
      id: 'leg_1',
      departure_airport: 'BUD',
      arrival_airport: 'LTN',
      departure_time: '2020-10-31T15:35',
      arrival_time: '2020-10-31T17:00',
      stops: 0,
      airline_name: 'Wizz Air',
      airline_id: 'WZ',
      duration_mins: 145,
    },
  ],
  price: '£35',
  agent: 'Wizzair.com',
  agent_rating: 9.1,
};

describe('Result', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Result flight={flight} />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Result flight={flight} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
