import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const[visitedCountries,setVisitedCountries]=useState([])
    const handleVisitedCountries=(country)=>{
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    const GetCountries = use(countriesPromise)
    //console.log(GetCountries)
    return (
        <div>
             <h1>Countries: {GetCountries.length}</h1>
             <h2>Visited countries : {visitedCountries.length}</h2>
             <ol>
                {
                    visitedCountries.map(country=><li>{country.name.common}</li>)
                }
             </ol>
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