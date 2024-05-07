import Navbar  from './components/Navbar';
// components
import Card from './components/Card';
import axios from 'axios';
import { useState } from 'react';
import SearchBlock from './components/Searchbar';




export default function App() {
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async (formData) => {
    try {
      const { companyName, categorieName, rating, minPrice, maxPrice } = formData;
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MDYwMjA4LCJpYXQiOjE3MTUwNTk5MDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjkyN2ExNTBhLWE0MGMtNDE4MS04NmNjLTAyMWE0OTg0MjcwZCIsInN1YiI6InNpbWFyc2luZzAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJHVEJJVCIsImNsaWVudElEIjoiOTI3YTE1MGEtYTQwYy00MTgxLTg2Y2MtMDIxYTQ5ODQyNzBkIiwiY2xpZW50U2VjcmV0Ijoib1pnWFJEclNVU2puRGtEeCIsIm93bmVyTmFtZSI6IlRhbm1heSIsIm93bmVyRW1haWwiOiJzaW1hcnNpbmcwMDdAZ21haWwuY29tIiwicm9sbE5vIjoiMDM2MTMyMDI3MjEifQ.Dp93KnWNxXWN8WpwmwJZVzVel5lKCVXmTzVqw1k1YWE";

      const URL = `http://20.244.56.144/test/companies/${encodeURIComponent(companyName)}/categories/${encodeURIComponent(categorieName)}/products?top=${rating}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
      const response = await axios.get(URL,  { headers: {"Authorization" : `Bearer ${accessToken}`} });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  return (
    <><Navbar />
    
    <SearchBlock onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((result, index) => (
          <Card
            key={index}
            productName={result.productName}
            price={result.price}
            availability={result.availability}
            rating={result.rating}
            discount={result.discount}
          />
        ))}
      </div>
    </>
  )
}
