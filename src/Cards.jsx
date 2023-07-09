import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ActionAreaCard from './CardTemplate';
import file from './ProductsDB.csv';
import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Cards.css';

export function Cards() {
  const [dataEntries, setDataEntries] = useState([]);
  const [dataEntriesFiltered, setDataEntriesFiltered] = useState("");

  useEffect(() => {
    Papa.parse(file, {
      header: true,
      download: true,
      complete: (results) => {
        setDataEntries(results.data);
      },
    });
  }, []);

  return (
    <div>
        <div>
            <TextField fullWidth label="Search" id="fullWidth" onChange={(event) => {setDataEntriesFiltered(event.target.value);}} />
        </div>

        <div class="cards">
        {dataEntries.filter(dataEntry => dataEntry.title.includes(dataEntriesFiltered)).map((dataEntry) => (
            <ActionAreaCard
            key={dataEntry.title}
            title={dataEntry.title}
            description={dataEntry.description}
            image={dataEntry.image}
            />
        ))}
        </div>
    </div>
  );
}

export default Cards;