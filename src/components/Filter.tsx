import React from "react";

interface FilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search products..."
      className="border-4 border-cyan-500 m-2 p-2 rounded"
    />
  );
};

export default Filter;
