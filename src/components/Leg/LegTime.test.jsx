import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import LegTime from './LegTime';

describe('LegTime', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<LegTime time="2020-10-31T17:00" airport="LTN" />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LegTime time="2020-10-31T17:00" airport="LTN" />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
