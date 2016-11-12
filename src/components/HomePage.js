import React from 'react';
import SearchForm from './SearchForm';
import TripsDisplay from './TripsDisplay';

export default function HomePage() {
  // this is dummy data for now
  const trips1 = {
    trips: [{
      location: 'Golden Gate',
      image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
    },
      {
        location: 'Old Street',
        image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
      }],
  };

  const trips2 = {
    trips: [{
      location: 'Best Beach',
      image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
    },
      {
        location: 'Hidden Surf',
        image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
      }],
  };

  return (
    <div>
      <SearchForm />
      <div>
        <label>Must See Trips</label>
        <TripsDisplay results={trips1} />
      </div>
      <div>
        <label>Beach Trips</label>
        <TripsDisplay results={trips2} />
      </div>
    </div>
  );
}
