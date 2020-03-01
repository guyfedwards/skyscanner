import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import ResultFooter from '.';

describe('ResultFooter', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ResultFooter agent="CheapFlights" price="£35" />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ResultFooter agent="CheapFlights" price="£35" />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
