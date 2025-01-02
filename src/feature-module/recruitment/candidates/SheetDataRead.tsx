// src/components/SheetDataRead.tsx

import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { fetchSheetData } from '../../../core/api/axios-api/GetApi';

const SheetDataRead = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  console.log("---------------------------------------------",data)
  // Fetch data from Google Sheets API
  const fetchGoogleSheetData = async () => {
    try {
        const apik="jbjbbjbjkbkbfsajfbak rohit patel "
      const data = await fetchSheetData();
      setData(data);
    } catch (err) {
      setError('Error fetching Google Sheets data');
    }
  };

  // Handle Excel file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const binaryStr = e.target.result;
        const wb = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = wb.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
        console.log(sheetData)
        // setData(sheetData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className='container-fluid m-5 p-5'>
      <h2>Applicants Data</h2>
      
      {/* Google Sheet Data Fetch Button */}
      <button onClick={fetchGoogleSheetData}>Fetch Google Sheet Data</button>
      
      {/* Excel File Upload */}
    <div className='p-5 m-5'>
    <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
    </div>
      
      {/* Displaying the fetched data */}
      <div>
        {error && <div>{error}</div>}
        {/* <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h3>{item.Candidate}</h3>
              <p>Email: {item.Email}</p>
              <p>Applied Role: {item.Applied_Role}</p>
              <p>Phone: {item.Phone}</p>
              <p>Applied Date: {item.Applied_Date}</p>
              <a href={item.Resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default SheetDataRead;
