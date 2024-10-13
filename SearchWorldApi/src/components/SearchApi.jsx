import axios from "axios";
import { useEffect, useState, createContext } from "react";
import '../App.css';

// Create a Context for data and theme
const UserContext = createContext();

const SearchApi = ({ children }) => {
  const [data, setData] = useState([]);              
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedCountry, setSelectedCountry] = useState('')
  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setData(response.data);                        
        setFilteredData(response.data);               
        setLoading(false);
      } catch (error) {
        console.log('Error occurred:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'white' ? 'dark' : 'white'));
  };

  // Search or Filter Logic
  // const handleSearch = (e) => {
  //   const searched = e.target.value.toLowerCase();
  //   setSearchTerm(searched);
  //   if (searched !== '') {
  //     const filtered = data.filter((country) =>
  //       country.name.common.toLowerCase().includes(searched)
  //     );
  //     setFilteredData(filtered);
  //   } else {
  //     setFilteredData(data);  
  //   }
  // };

  const handleSearch = (e) =>{
    const searched = e.target.value.toLowerCase()
    setSearchTerm(searched)
    if(searched != ''){
      const filtered = data.filter((country)=>country.name.common.toLowerCase().includes(searched))
      setFilteredData(filtered)
    }
    else{
      setFilteredData(data)
    }
  }

  const handleSelect = (e) =>{
    const selected = e.target.value.toLowerCase()
    setSelectedCountry(e.target.value);
    console.log(selected)
    if (selected !== 'Select Country' && selected !== '') {
      const filtered = data.filter((country) => 
        country.region.toLowerCase() === selected.toLowerCase()
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset if "Select Country" is chosen
    }
    
  }
  return (
    <UserContext.Provider value={{ filteredData, theme,selectedCountry }}>
      <div className={`app-container ${theme}`}>
        <div className={`Nav ${theme}`}>
          <h3>Where in the World?</h3>
          
          <button className="mode" onClick={toggleTheme}>
            <h5 className={`but-color ${theme}`}>
              {theme === 'dark' ? '☀️Light Mode' : '🌙Dark Mode'}
            </h5>
          </button>
        </div>
        <div className="input">
        <input
            type="text"
            placeholder="🔍Search Country"
            value={searchTerm}
            onChange={handleSearch}
            className="searchCountry"
          />
          
          <select value={selectedCountry} onChange={handleSelect} className="selectDiv">
            <option value="">Select Country</option>
            <option value="Asia">Asia</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          
          
        </div>
        
        {children}
      </div>
    </UserContext.Provider>
  );
};

export { SearchApi, UserContext };
