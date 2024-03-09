import CharacterData from './character'
import React from 'react';
const SearchTerm = ({ data }) => (
  <>
    {data.characters.map((character, index) => (
      <CharacterData key={index} data={character} />
    ))}
  </>
);
  
  export default SearchTerm;