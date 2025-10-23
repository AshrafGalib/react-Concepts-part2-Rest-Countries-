
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const fetchCountries =async()=>{
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,independent')
  return res.json()
}
function App() {
const countriesPromise =fetchCountries()
  return (
    <>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
