import { useContext } from "react"
import { UserContext } from "./SearchApi"
const FilterCountry = () =>{
    const {filteredData,theme} = useContext(UserContext)
    console.log(filteredData)
    return (
        <>
        <div className={`Display ${theme}`}>
      
        {filteredData.length > 0 ? (
        filteredData.map((country) => (
          <div className="countries" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              height="150px"
              width="250px"
            />
            <div className="description">
              <h4>{country.name.common}</h4>
              <p className="pTag">{`Population: ${country.population}`}</p>
              <p className="pTag">{`Region: ${country.region}`}</p>
              <p className="pTag">{`Capital: ${country.capital}`}</p>
            </div>
          </div>
        ))
      ) : (
        <h3>No countries found</h3> 
      )}
    </div>
        </>
    )
}

export default FilterCountry