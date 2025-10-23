import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    //console.log(country)
   const [visited,setVisited]=useState(false)
   const handleVisited =()=>{
    // if(visited===true){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    setVisited(!visited)

   }

    return (
        <div className={`Country ${visited && 'Country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent Status : {country.independent ? 'Indendent Country' :'Not Indendent Country'}</p>
            <button onClick={handleVisited}>{
            visited ? 'Visited':'Not Visited'
            }</button>
                
            
        </div>
    );
};

export default Country;