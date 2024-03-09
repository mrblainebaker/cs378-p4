import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterData from './components/character.js'
import SearchTerm from './components/SearchTerm.js'
import React, { useState, useEffect } from 'react';





function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [characterInfo, setChar] = useState();
  const [typeChar, setTypeChar] = useState();
  const [input, setInput] = useState();


  useEffect(() => {
    handleButtonClick('CHMA0000261620');
  }, []);

  const fetchData = (searchTerm) => {
    setLoading(true);
    setError(null);
    setTypeChar(null);
    fetch(`http://stapi.co/api/v1/rest/character${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setChar(data);
        setLoading(false);
      })
      .catch(error => {
        setChar(null);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', error);
      });
    };

    const generateFormData = (input) => {
      const formData = new URLSearchParams();
      formData.append('name', input);
      return formData;
    };

    const fetchSearch = (input) => {
      setLoading(true);
      setError(null);
      setChar(null);
      setChar(false);

      const formData = generateFormData(input)

      fetch(`https://stapi.co/api/v1/rest/character/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body : formData
      })
        .then(response => response.json())
        .then(data => {
          setChar(null);
          setTypeChar(data);
          setLoading(false);
          if (data.characters.length === 0) {
            setError(`${input} not found`);
          }
        })
        .catch(error => {
          setChar(null);
          setTypeChar(null);
          setError('Error fetching Please try again later.');
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    }
    
    const handleType = (event) => {
      setInput(event.target.value);
    };

    const handleSearch = () => {
      fetchSearch(input);
    };


      const handleButtonClick = (searchTerm) => {
        fetchData(`?uid=${searchTerm}`);
      };

  return (
    <>    
    <h1>Star Trek Character Information</h1>
    <row>
      <column className="buttonCol">
      <button className="btn btn-primary" onClick={() => handleButtonClick('CHMA0000261620')}>Data</button>
        </column>
      <column className="buttonCol">
      <button className="btn btn-primary" onClick={() => handleButtonClick('CHMA0000123073')}>William Riker</button>
        </column>
      <column className="buttonCol">
      <button className="btn btn-primary" onClick={() => handleButtonClick('CHMA0000289509')}>Jean-Luc Picard</button>
        </column>
    </row>
    <p></p>
    <row>
      <column>
      <input type="text" id="textInput" placeholder="Enter text here" onChange={handleType}/>
      <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </column>
    </row>


    <div>
      {error && <p className="text-danger">{error}</p>}
      {typeChar && <SearchTerm data={typeChar}/>}
      {characterInfo && <CharacterData data={characterInfo.character} />}
    </div>


    </>

  );
}

export default App;
