import React from 'react';
import TourCard from '../components/TourCard';

const NigeriaTours: React.FC = () => {
  const tours = [
    {
      image: '/tour1.jpg',
      price: '$100',
      name: 'Tour 1',
      description: 'Description for Tour 1...',
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Nigeria Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default NigeriaTours;
