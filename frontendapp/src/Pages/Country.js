import React, { useEffect, useState } from "react";
import axios from "axios";

function Country() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const API = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  console.log("API BASE =", API);

  const loadCountries = () => {
    axios.get(`${API}/api/country`).then((res) => {
      setCountries(res.data);
    });
  };

  const loadStates = (countryId) => {
    setSelectedCountry(countryId);
    setSelectedState("");
    setSelectedDistrict("");
    setDistricts([]);


    axios.get(`${API}/api/state/${countryId}`).then((res) => {
      setStates(res.data);
    });
  };


  const loadDistricts = (stateId) => {
    setSelectedState(stateId);
    setSelectedDistrict("");

    axios.get(`${API}/api/dist/${stateId}`).then((res) => {
      setDistricts(res.data);
    });
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <div className="container-fluid mt-5">

      <label className="font-semibold text-lg">Select Country:</label>
      <select
        className="border p-2 rounded ml-3"
        value={selectedCountry}
        onChange={(e) => loadStates(e.target.value)}
      >
        <option value="">-- Choose Country --</option>
        {countries.map((c) => (
          <option key={c.country_id} value={c.country_id}>
            {c.country_name}
          </option>
        ))}
      </select>



      <label className="font-semibold text-lg ml-6">Select State:</label>
      <select
        className="border p-2 rounded ml-3"
        value={selectedState}
        onChange={(e) => loadDistricts(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="">-- Choose State --</option>
        {states.map((s) => (
          <option key={s.state_id} value={s.state_id}>
            {s.state_name}
          </option>
        ))}
      </select>



      <label className="font-semibold text-lg ml-6">Select District:</label>
      <select
        className="border p-2 rounded ml-3"
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
        disabled={!selectedState}
      >
        <option value="">-- Choose District --</option>
        {districts.map((d) => (
          <option key={d.dist_id} value={d.dist_id}>
            {d.dist_name}
          </option>
        ))}
      </select>


      <div className="mt-4 p-3 border rounded bg-light">
        <h4>SELECTED</h4>

        <p><strong>Country:</strong>  
          {countries.find(c => c.country_id == selectedCountry)?.country_name || ""}
        </p>

        <p><strong>State:</strong>  
          {states.find(s => s.state_id == selectedState)?.state_name || ""}
        </p>

        <p><strong>District:</strong>  
          {districts.find(d => d.dist_id == selectedDistrict)?.dist_name || ""}
        </p>
      </div>
    </div>
  );
}

export default Country;
