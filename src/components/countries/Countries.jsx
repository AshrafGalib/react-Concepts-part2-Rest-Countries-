import React, { use } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const GetCountries = use(countriesPromise)
    //console.log(GetCountries)
    return (
        <div>
             <h1>Countries: {GetCountries.length}</h1>
            <div className='Countries'>
                 {
                GetCountries.map(country=><Country key={country.name.official} country={country}></Country>)
             }
            </div>
        </div>
    );
};

export default Countries;