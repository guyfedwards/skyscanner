import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import Stops from './Stops';

describe('Stops', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Stops stops={0} />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Stops stops={1} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
