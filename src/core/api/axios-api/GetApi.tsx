import axios from 'axios';


export const fetchSheetData = async () => {
   
  try {
    const response = await axios.get('http://localhost:3002/api/google-sheets-data');
    // console.log("success fulll api",response)

    return response.data.values; // Returns the data from the sheet
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return [];
  }
};
