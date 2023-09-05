import React, { useState } from "react";

interface TourCardProps {
  image: string;
  price: string;
  name: string;
  description: string;
  onRemove: () => void;
}

const TourCard: React.FC<TourCardProps> = ({
  image,
  price,
  name,
  description,
  onRemove,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleNotInterested = () => {
    onRemove();
  };

  const displayDescription = showDescription
    ? description
    : description.slice(0, 100); // Display the first 100 characters initially

  return (
    <div className="p-4 rounded-lg shadow-md mb-4 max-w-[30rem] bg-zinc-800">
      <img src={image} alt={name} className="mb-2" />
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-gray-500">{price}</span>
      </div>
      <p className="mb-2">{displayDescription}</p>

      <button
        onClick={toggleDescription}
        className="text-green-200 hover:underline focus:outline-none"
      >
        {showDescription ? "Show Less" : "Read More"}
      </button>
      <div className="flex flex-col">
        <button
          onClick={handleNotInterested}
          className="text-green-500 hover:underline focus:outline-none border border-green-500 mt-2 px-4 py-1 rounded-md"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;
