import React, { useContext } from 'react';
import { BioData } from './Comp1';
const Comp2 = () => {
  const channelName = useContext(BioData);
  return (
    <div>
      <p>hello {channelName}</p>
    </div>
  );
};

export default Comp2;
