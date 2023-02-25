import React from 'react'

const SearchForm = (props) => {
    const setSearchTitle = props.setSearchTitle;
    const setSearchSeller = props.setSearchSeller;

    const searchForm = document.getElementById('searchForm')

    return (
        <form id="searchForm" className="submissionForm" onSubmit={(event)=>{
            event.preventDefault();
            setSearchTitle("");
            setSearchSeller("");
            searchForm.reset();
        }}>
            <h2>Search: </h2>
            <label>Title:
                <input type='text' name="title" onChange={(event)=>{
                    setSearchTitle(event.target.value)
                }}/>
            </label>
            <label>Seller:
                <input type='text' name="seller" onChange={(event)=>{
                    setSearchSeller(event.target.value)
                }}/>
            </label>
            <button type="submit">Clear</button>
        </form>
    )
}

export default SearchForm