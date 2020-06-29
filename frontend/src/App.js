import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  async function getDog() {
    setLoading(true);
    setError(null);
    setRes(null);

    try {
      const apiRes = await window.fetch("/api/breed");
      const res = await apiRes.json();
      setRes(res);
      setError(null);
      setLoading(false);
    } catch (e) {
      setError(e);
      setRes(null);
      setLoading(false);
    }
  }

  useEffect(() => {
    getDog();
  }, []);

  if (error) {
    console.error(error);
    return (
      <div>
        <h1>Error in AJAX Request</h1>
        <pre>
          <code>{JSON.stringify(error, null, 4)}</code>
        </pre>
      </div>
    );
  }
  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading …</h1>
      ) : (
        <div className="animal">
          <img src={res.imageURL} alt="dog" />
          <h2>Breed: {res.name}</h2>
          <h3>Origin: {res.origin}</h3>
          <button onClick={getDog}>get new pup</button>
        </div>
      )}
    </div>
  );
}

export default App;
