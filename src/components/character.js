import React from 'react';

const CharacterData = ({ data }) => (
    <div>
      <h2>Character Data</h2>
      <ul>
        {data && data.map((character, index) => (
          <li key={index}>
            <h3>Character {index + 1}</h3>
            <div>
              <strong>Name:</strong> {character.name|| "N/A"}<br />
              <strong>Gender:</strong> {character.gender|| "N/A"}<br />
              <strong>Year of Birth:</strong> {character.yearOfBirth|| "N/A"}<br />
              <strong>Place of Birth:</strong> {character.placeOfBirth|| "N/A"}<br />
              <strong>Year of Death:</strong> {character.yearOfDeath || "N/A"}<br />
              <strong>Height:</strong> {character.height || "N/A"}<br />
              <strong>Weight:</strong> {character.weight || "N/A"}<br />
              <strong>Marital Status:</strong> {character.maritalStatus || "N/A"}<br />
              <strong>Mirror:</strong> {character.mirror ? "Yes" : "No"}<br />
              <strong>Alternate Reality:</strong> {character.alternateReality ? "Yes" : "No"}<br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default CharacterData;