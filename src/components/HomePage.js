import React from 'react';
import SearchForm from './SearchForm';
import TripsDisplay from './TripsDisplay';

export default function HomePage() {
  const trips1 = {
    trips: [{
      location: 'Golden Gate',
      image: 'an image',
    },
      {
        location: 'Old Street',
        image: 'an image',
      }],
  };

  const trips2 = {
    trips: [{
      location: 'Best Beach',
      image: 'an image',
    },
      {
        location: 'Hidden Surf',
        image: 'an image',
      }],
  };

  return (
    <div>
      <SearchForm />
      <TripsDisplay results={trips1} />
      <TripsDisplay results={trips2} />
    </div>
  );
}
