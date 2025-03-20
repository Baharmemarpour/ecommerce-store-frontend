import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  // Accessing search, setSearch, showSearch, and setShowSearch from context
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible,setVisible] = useState(false)
  const location = useLocation();

  useEffect(()=>{
  if (location.pathname.includes('collection')){
       setVisible(true);
  }
  else {
    setVisible(false)
  }
  
  },[location])

  // If showSearch is true, the search bar will be displayed
  return showSearch && visible ? (
    <div className='relative border border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        {/* Search input field */}
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className='flex-1 outline-none bg-inherit text-sm' 
          type="text" 
          placeholder='Search' 
        />
        {/* Search icon */}
        <img className='w-5 opacity-70' src={assets.search} alt="search icon" />
      </div>
      {/* Close icon outside the search box */}
      <img 
        onClick={() => setShowSearch(false)} 
        className='absolute right-5 top-1/2 transform -translate-y-1/2 w-3 cursor-pointer' 
        src={assets.cross_icon} 
        alt="close icon" 
      />
    </div>
  ) : null; // Return null if showSearch is false
};

export default SearchBar;