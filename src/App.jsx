/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import database from "../firebase";
import './App.css'


function App() {
  const [data, setData] = useState([]);
  const [led, setLed] = useState();
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database.ref("etat").once("value");
      const val = snapshot.val();
      const dataArray = val ? Object.values(val) : []; // ensure dataArray is an array
      for (let i=0 ; i<dataArray.length; i++){
        data.push(dataArray[i])
      }
      setData(dataArray);
      // get true or false
      // const response = await database.ref("etat/LED_1").once("value");
      // const x = response.val();
      // setLed(x);
      
  };
    fetchData();
  }, []); 

  return (
<>

    <h1>Surveillance De Systéme HVAC</h1>
<div>
<div className="data-container">
  <div className="data-item">
    <h2>Temperature : {data[4]}&#8451;</h2>
  </div>
 
  <div className="separator"></div>
  <div className="data-item">
    <h2>Humidite: {data[5]}%</h2>
  </div>
</div>
 <table>
  <tbody>
 <tr>
      <td>
        <div className={`${data[0] == 0 ? "container" : "wrapper"} `}></div>
      </td>
      <td>
      {data[0] == 0 ? (
        <h3>Malfonctionnement CTA 1</h3>
      ):(
        <h3>fonctionnement CTA 1</h3>
      )}
      </td>
    </tr>
    <tr>
      <td>
        <div className={`${data[1] == 0 ? "container" : "wrapper"} `}></div>
      </td>
      <td>
      {data[1] == 0 ? (
        <h3>Malfonctionnement CTA 2</h3>
      ):(
        <h3>fonctionnement CTA 2</h3>
      )}
      </td>
    </tr>
    <tr>
      <td>
        <div className={`${data[2] == 0 ? "container" : "wrapper"} `}></div>
      </td>
      <td>
      {data[2] == 0 ? (
        <h3>Malfonctionnement Groupe Frigorifique 1</h3>
      ):(
        <h3>fonctionnement  Groupe Frigorifique 1</h3>
      )}
       
      </td>
    </tr>
    <tr>
      <td>
        <div className={`${data[3] == 0 ? "container" : "wrapper"} `}></div>
      </td>
      <td>
      {data[3] == 0 ? (
        <h3>Malfonctionnement Groupe Frigorifique 2</h3>
      ):(
        <h3>fonctionnement  Groupe Frigorifique 2</h3>
      )}
       
      </td>
    </tr>
    <tr>
      <td>
        <div className={`${data[6] == 0 ? "container" : "wrapper"} `}></div>
      </td>
      <td>
      {data[4] == 0 ? (
        <h3>Malfonctionnement Unité de Traitement d'Air 1</h3>
      ):(
        <h3>fonctionnement  Unité de Traitement d'Air 1</h3>
      )}
       
      </td>
    </tr>
    <tr>
      <td>
        <div className={`${data[7] == 0 ? "container" : "wrapper"} `}></div>
      </td>
      <td>
      {data[3] == 0 ? (
        <h3>Malfonctionnement Unité de Traitement d'Air 2</h3>
      ):(
        <h3>fonctionnement  Unité de Traitement d'Air 2</h3>
      )}
      </td>
    </tr>
    </tbody>
</table>

</div>

</>
  );
}

export default App;