import { useState, useEffect } from "react";

import FilterButton from "../FilterButton";

const Filter = ({ setAngeboteFiltered, personen, angebote }) => {
  const [filterKammer, setFilterKammer] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDozierende, setFilterDozierende] = useState("");

  const [showCategories, setShowCategories] = useState(false);
  const [showPerson, setShowPerson] = useState(false);

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleShowPerson = () => {
    setShowPerson(!showPerson);
  };

  const handleFilterKammer = () => {
    setFilterKammer(!filterKammer);
  };

  const handleFilterCategory = (category) => {
    setFilterCategory(filterCategory === category ? "" : category);
  };

  const handleFilterDozierende = (dozierende) => {
    setFilterDozierende(filterDozierende === dozierende ? "" : dozierende);
  };

  useEffect(() => {
    let filteredAngebote = angebote;

    if (filterKammer) {
      filteredAngebote = filteredAngebote.filter((angebot) => angebot.kammer);
    }

    if (filterCategory) {
      filteredAngebote = filteredAngebote.filter((angebot) =>
        angebot.kategorie.includes(filterCategory)
      );
    }

    if (filterDozierende) {
      filteredAngebote = filteredAngebote.filter((angebot) =>
        angebot.personen.some((person) => person.name === filterDozierende)
      );
    }

    setAngeboteFiltered(filteredAngebote);
  }, [filterKammer, filterCategory, filterDozierende, angebote]);
  return (
    <div className="filter">
      Filter
      <div className="filterButtons">
        <div>
          <FilterButton
            value="Kammeranrechnungsfähig"
            active={filterKammer}
            fct={handleFilterKammer}
          />
        </div>

        {!filterCategory ? (
          <div className="filterButtonsColumn" style={{ width: "121px" }}>
            <FilterButton value="Kategorie" fct={handleShowCategories} />
            {showCategories && (
              <>
                <FilterButton
                  value="Seminar"
                  active={filterCategory === "Seminar"}
                  fct={() => handleFilterCategory("Seminar")}
                />
                <FilterButton
                  value="Workshop"
                  active={filterCategory === "Workshop"}
                  fct={() => handleFilterCategory("Workshop")}
                />
                <FilterButton
                  value="Ausbildung"
                  active={filterCategory === "Ausbildung"}
                  fct={() => handleFilterCategory("Ausbildung")}
                />
              </>
            )}
          </div>
        ) : (
          <FilterButton
            value={filterCategory}
            active={true}
            fct={() => handleFilterCategory("")}
          />
        )}
        {!filterDozierende ? (
          <div className="filterButtonsColumn" style={{ width: "120px" }}>
            <FilterButton value="Dozierende" fct={handleShowPerson} />

            {showPerson && (
              <>
                {personen.map((person) => (
                  <FilterButton
                    value={person.name}
                    active={filterDozierende === person.name}
                    fct={() => handleFilterDozierende(person.name)}
                  />
                ))}
              </>
            )}
          </div>
        ) : (
          <FilterButton
            value={filterDozierende}
            active={true}
            fct={() => handleFilterDozierende("")}
          />
        )}
      </div>
    </div>
  );
};

export default Filter;