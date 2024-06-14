import { Link } from "@/navigation";
import React from "react";

const FilterButton = ({ value, active, fct }) => {
  return (
    <div
      className={`button filterButton ${active && "filterActive"}`}
      onClick={fct}
    >
      {value}
    </div>
  );
};

export default FilterButton;
