import { useState, useEffect } from "react";

import FilterButton from "../FilterButton";

const Filter = ({ setAngeboteFiltered, personen, angebote, className }) => {
  const [filterKammer, setFilterKammer] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDozierende, setFilterDozierende] = useState("");

  const [showCategories, setShowCategories] = useState(false);
  const [showPerson, setShowPerson] = useState(false);

  const handleShowCategories = () => {
    setShowPerson(false);
    setShowCategories(!showCategories);
  };

  const handleShowPerson = () => {
    setShowCategories(false);
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
        angebot.kategorie?.includes(filterCategory)
      );
    }

    if (filterDozierende) {
      filteredAngebote = filteredAngebote.filter((angebot) =>
        angebot.personen?.some((person) => person.name === filterDozierende)
      );
    }

    setAngeboteFiltered(filteredAngebote);
  }, [filterKammer, filterCategory, filterDozierende, angebote]);

  useEffect(() => {
    !filterCategory && setShowCategories(false);
    !filterDozierende && setShowPerson(false);
  }, [filterCategory, filterDozierende]);

  return (
    <div className={`filter ${className}`}>
      <span className="filterHeadline">Filter</span>
      <div className="filterButtons">
        <FilterButton
          value="Kammeranrechnungsfähig"
          active={filterKammer}
          fct={handleFilterKammer}
        />

        {!filterCategory ? (
          <div className="filterButtonsColumn hideMobile">
            <FilterButton value="Formate" fct={handleShowCategories} />

            {showCategories && (
              <div
                style={{
                  position: "absolute",
                  display: "block",
                  marginTop: "42px",
                }}
              >
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
                <FilterButton
                  value="Webinar"
                  active={filterCategory === "Webinar"}
                  fct={() => handleFilterCategory("Webinar")}
                />
              </div>
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
          <div
            className="filterButtonsColumn hideMobile"
            // style={{ width: "120px" }}
          >
            <FilterButton value="Dozierende" fct={handleShowPerson} />

            {showPerson && (
              <div
                style={{
                  position: "absolute",
                  display: "block",
                  marginTop: "42px",
                }}
              >
                {personen.map((person) => (
                  <FilterButton
                    value={person.name}
                    active={filterDozierende === person.name}
                    fct={() => handleFilterDozierende(person.name)}
                  />
                ))}
              </div>
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
