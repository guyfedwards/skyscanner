import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import flightsJson from '../../../public/flights.json';

import App from './App';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      resolve({
        json: () =>
          new Promise(r => {
            r(flightsJson);
          }),
      });
    }),
);

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
