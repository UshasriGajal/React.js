import React from 'react'
import {SearchApi} from './components/SearchApi'
import DisplayCountries from './components/DisplayCountries'
import FilterCountry from './components/FilterCountry'

const App = () => {
  return (
    <div>
      <SearchApi>
        <DisplayCountries />
        {/* <FilterCountry/> */}
      </SearchApi>
    </div>
  )
}

export default App
