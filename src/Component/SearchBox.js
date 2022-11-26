import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
      <div className='pa2'>
        <input 
        className='pa3 ba b--black bg-light-gray tc'
        type = 'Search' 
        placeholder='Search Robots' 
        onChange = { searchChange }
        /> 
        </div>
    );
}
export default SearchBox;