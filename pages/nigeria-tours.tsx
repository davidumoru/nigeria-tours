import React, { useState } from "react";
import TourCard from "../components/TourCard";

const NigeriaTours: React.FC = () => {
  const [tours, setTours] = useState([
    {
      image: "/Olumo-Rock.jpeg",
      price: "$100",
      name: "Tour 1",
      description: "Description for Tour 1...",
    },
    {
      image: "/kajuru11.jpeg",
      price: "$150",
      name: "Tour 2",
      description: "Description for Tour 2...",
    },
    {
      image: "/nike4.jpeg",
      price: "$120",
      name: "Tour 3",
      description: "Description for Tour 3...",
    },
    {
      image: "/Obudu-Ranch.jpeg",
      price: "$90",
      name: "Tour 4",
      description: "Description for Tour 4...",
    },
    {
      image: "/Osun-sacred-grove.jpeg",
      price: "$200",
      name: "Tour 5",
      description: "Description for Tour 5...",
    },
    {
      image: "/zuma-rock.jpeg",
      price: "$80",
      name: "Tour 6",
      description: "Description for Tour 6...",
    },
    {
      image: "/lekki-conservation.jpeg",
      price: "$130",
      name: "Tour 7",
      description: "Description for Tour 7...",
    },
    {
      image: "/eko-beach.jpeg",
      price: "$110",
      name: "Tour 8",
      description: "Description for Tour 8...",
    },
  ]);

  const handleRemoveTour = (index: number) => {
    setTours((prevTours) => prevTours.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Nigeria Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} onRemove={() => handleRemoveTour(index)} />
        ))}
      </div>
    </div>
  );
};

export default NigeriaTours;
