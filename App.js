// src/App.js
import React from 'react';
import Header from './components/Header';
import BecomeAcca from './components/BecomeAcca';
import WhyChooseUs from './components/WhyChooseUs';
import AccaEligibility from './components/AccaEligibility';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import KickOffJourney from './components/KickOffJourney';

const App = () => {
  return (
    <div>
      <Header />
      <BecomeAcca />
      <WhyChooseUs />
      <AccaEligibility />
      <WhatWillYouLearn />
      <PlacementAssistance />
      <KickOffJourney />
    </div>
  );
};

export default App;
