import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://127.0.0.1:3000/incidents');
        setIncidents(result.data);
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Incidents</h1>
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Publication Date</th>
                </tr>
              </thead>
              <tbody>
                {incidents && incidents.map((incident, index) => (
                  <tr key={index}>
                    <td><a href={incident.link}>{incident.title}</a></td>
                    <td>{incident.description}</td>
                    <td>{incident.pubDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
