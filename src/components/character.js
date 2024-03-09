import React from 'react';
const CharacterData = ({ data }) => (
  <>
    <div>
      <h2>{data.name}</h2>
      <ul>
            <div>
              <strong>Gender:</strong> {data.gender|| "N/A"}<br />
              <strong>Year of Birth:</strong> {data.yearOfBirth|| "N/A"}<br />
              <strong>Place of Birth:</strong> {data.placeOfBirth|| "N/A"}<br />
              <strong>Year of Death:</strong> {data.yearOfDeath || "N/A"}<br />
              <strong>Place of Death:</strong> {data.placeOfDeath || "N/A"}<br />
              <strong>Hologram:</strong> {data.hologram? "Yes" : "No"}<br />
              <strong>Marital Status:</strong> {data.maritalStatus || "N/A"}<br />
              <strong>Mirror:</strong> {data.mirror ? "Yes" : "No"}<br />
              <strong>Alternate Reality:</strong> {data.alternateReality ? "Yes" : "No"}<br />
              <strong>Fictional:</strong> {data.fictionalCharacter? "Yes" : "No"}<br />
            </div>
      </ul>
    </div>
    </>
  );
  
  export default CharacterData;