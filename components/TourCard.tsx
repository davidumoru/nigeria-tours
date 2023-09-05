import React, { useState } from 'react';

interface TourCardProps {
  image: string;
  price: string;
  name: string;
  description: string;
  onRemove: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ image, price, name, description, onRemove }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleNotInterested = () => {
    onRemove();
  };

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg mb-4">
      <img src={image} alt={name} className="mb-2" />
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-gray-500">{price}</span>
      </div>
      <p className={showDescription ? 'block' : 'hidden'}>{description}</p>
      <button
        onClick={toggleDescription}
        className="text-blue-500 hover:underline focus:outline-none"
      >
        {showDescription ? 'Show Less' : 'Show More'}
      </button>
      <button
        onClick={handleNotInterested}
        className="mt-2 text-red-500 hover:underline focus:outline-none"
      >
        Not Interested
      </button>
    </div>
  );
};

export default TourCard;
