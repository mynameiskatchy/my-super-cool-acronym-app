import { useState, useEffect, useMemo } from "react";

const App = ({ orders }) => {
  const [acronymName, setacronymName] = useState("");
  const [description, setDescription] = useState("");
  const [acronyms, setAcronyms] = useState([
    { name: "EOI", description: "Evidence of Insurability" },
  ]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setacronymName(e.target.value)}
        value={acronymName}
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        onClick={() => {
          const newAcronym = { name: acronymName, description };
          const newAcronyms = [...acronyms];
          newAcronyms.push(newAcronym);
          setAcronyms(newAcronyms);
        }}
      >
        Add Acronym
      </button>

      <h2>List of Acronyms</h2>

      {acronyms.map((acronym, index) => (
        <div key={index}>
          <button
            onClick={() => {
              let newAcronyms = [...acronyms];
              newAcronyms.splice(index, 1);
              setAcronyms(newAcronyms);
            }}
          >
            Delete
          </button>
          <strong>{acronym.name}</strong> <span>- {acronym.description}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
