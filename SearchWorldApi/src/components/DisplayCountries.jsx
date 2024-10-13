import React, { useContext } from 'react';
import { UserContext } from './SearchApi'; 
import 'bootstrap/dist/css/bootstrap.min.css'
const DisplayCountries = () => {
  const { filteredData, theme } = useContext(UserContext);

  return (
    <div className={`Display ${theme}`}>
      {console.log(filteredData)}
      {filteredData.length > 0 ? (
        filteredData.map((country) => (
          
          // <div className="countries" key={country.cca3}>
          //   <img
          //     src={country.flags.png}
          //     alt={`${country.name.common} flag`}
          //     className='CtyImg'
          //   />
          //   <div className="description">
          //     <h4>{country.name.common}</h4>
          //     <p className="pTag">{`Population: ${country.population}`}</p>
          //     <p className="pTag">{`Region: ${country.region}`}</p>
          //     <p className="pTag">{`Capital: ${country.capital}`}</p>
          //   </div>


            <div className="countries" key={country.cca3}>
                <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className='CtyImg'
            />
            <div className="description">
              <div className='names'>
               <h5>{country.name.common}</h5>
               <p className="pTag">{`Population: ${country.population}`}</p>
               <p className="pTag">{`Region: ${country.region}`}</p>
               <p className="pTags">{`Capital: ${country.capital}`}</p>
               </div>
               <a href={country.maps.googleMaps} className="btn Google btn-primary">Google Maps</a>
               
             </div>
              </div>
          
          

          
        ))
      ) : (
        <h3>No countries found</h3> 
      )}
    </div>
  );
};

export default DisplayCountries;
