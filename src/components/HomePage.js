import React from 'react';
import SearchForm from './SearchForm';
import TripsDisplay from './TripsDisplay';

export default function HomePage() {
  return (
    <div>
      <SearchForm />
      <TripsDisplay />
    </div>
  )
}
