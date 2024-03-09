import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterData from './components/character'
import React, { useState, useEffect } from 'react';



function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [characterInfo, setChar] = useState(null);

  useEffect(() => {
    handleButtonClick('CHMA0000261620');
  }, []);

  const fetchData = (searchTerm) => {
    setLoading(true);
    setError(null);
    fetch(`http://stapi.co/api/v1/rest/character${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        var parsedData = JSON.parse(data);
        setChar(parsedData);
        setLoading(false);
      })
      .catch(error => {
        setChar(null);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', error);
      });
    };

    const handleType = (searchTerm) => {
        fetchData(`/search/${searchTerm}`);
      };


      const handleButtonClick = (searchTerm) => {
        fetchData(`?uid=${searchTerm}`);
      };

  return (
    <>    
    <p>Star Trek?</p>
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
      </column>
    </row>

    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {characterInfo && <CharacterData characterInfo={characterInfo} />}
    </div>

    <div id="data">
        {characterInfo ?(
          <pre>{JSON.stringify(characterInfo, null, 2)}</pre>
        ) :
        <p>lol</p>}
      </div>

    </>

  );
}

export default App;
