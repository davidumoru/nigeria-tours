import React from "react";
import TourCard from "../components/TourCard";

const NigeriaTours: React.FC = () => {
  const tours = [
    {
      image: "/tour1.jpg",
      price: "$100",
      name: "Tour 1",
      description: "Description for Tour 1...",
    },
    {
      image: "/tour2.jpg",
      price: "$150",
      name: "Tour 2",
      description: "Description for Tour 2...",
    },
    {
      image: "/tour3.jpg",
      price: "$120",
      name: "Tour 3",
      description: "Description for Tour 3...",
    },
    {
      image: "/tour4.jpg",
      price: "$90",
      name: "Tour 4",
      description: "Description for Tour 4...",
    },
    {
      image: "/tour5.jpg",
      price: "$200",
      name: "Tour 5",
      description: "Description for Tour 5...",
    },
    {
      image: "/tour6.jpg",
      price: "$80",
      name: "Tour 6",
      description: "Description for Tour 6...",
    },
    {
      image: "/tour7.jpg",
      price: "$130",
      name: "Tour 7",
      description: "Description for Tour 7...",
    },
    {
      image: "/tour8.jpg",
      price: "$110",
      name: "Tour 8",
      description: "Description for Tour 8...",
    },
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
