import React, { useEffect, useState } from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';
import Results from '../Results';

import STYLES from './App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const getLegs = (legIds, legs) => legIds.map(id => legs.find(l => l.id === id));

const App = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/flights.json');
      const { itineraries, legs } = await res.json();

      const joinedData = itineraries.map(itinerary => ({
        ...itinerary,
        legs: getLegs(itinerary.legs, legs),
      }));

      setFlights(joinedData);
    })();
  }, []);

  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        <Results flights={flights} />
      </main>
    </div>
  );
};

export default App;
