import React from 'react';
import SearchForm from './SearchForm';
import TripsDisplay from './TripsDisplay';

export default function HomePage() {
  // this is dummy data for now
  const trips1 = {
    data: [{
      name: 'Golden Gate',
      icon: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
    },
      {
        name: 'Old Street',
        icon: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
      }],
  };

  const trips2 = {
    data: [{
      name: 'Best Beach',
      icon: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
    },
      {
        name: 'Hidden Surf',
        icon: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200',
      }],
  };

  return (
    <div className="homeTopHalfContainer">
      <div className="homeTopHalf">
        <SearchForm />
        <div className='homeBg'>
        </div>
      </div>
      <div>
        <label>Must See Trips</label>
        <TripsDisplay results={trips1} key="1" />
      </div>
      <div>
        <label>Beach Trips</label>
        <TripsDisplay results={trips2} key="2" />
      </div>
    </div>
  );
}
