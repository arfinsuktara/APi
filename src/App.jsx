import './App.css'
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

  let [all, setAll] = useState([]);
 useEffect(()=>{

   async function all(){
     let data = await axios.get("https://restcountries.com/v3.1/all");
     setAll(data.data)
     
   
  }
  all();
  


},[]);

  return (
    <>
    <select>
      {all.map(item=>
        <option>{item.capital}</option>
      )}
    </select>
     
      
    </>
  );
}

export default App
