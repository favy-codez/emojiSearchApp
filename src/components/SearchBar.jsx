import React from 'react'

const SearchBar = ({ setSearchWord }) => {
    return (
        <div className='searchDiv'>
            <input onChange={e => setSearchWord(e.target.value)} type="text" className='search' />
        </div>
    )
}

export default SearchBar