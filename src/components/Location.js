import React, { useEffect } from 'react';

const NearbyLocations = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://nearby-ora.web.app/';
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Loading Nearby Page</h1>
      <p>You will be redirected in 5 seconds...</p>
    </div>
  );
}

export default NearbyLocations;
