import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const[visitedCountries,setVisitedCountries]=useState([])
    const handleVisitedCountries=()=>{
        console.log('added')
    }
    const GetCountries = use(countriesPromise)
    //console.log(GetCountries)
    return (
        <div>
             <h1>Countries: {GetCountries.length}</h1>
             <h2>Visited countries :</h2>
            <div className='Countries'>
                 {
                GetCountries.map(country=><Country
                    handleVisitedCountries={handleVisitedCountries} 
                    key={country.name.official} 
                    country={country}>

                    </Country>)
             }
            </div>
        </div>
    );
};

export default Countries;