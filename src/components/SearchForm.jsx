import React from 'react'

const SearchForm = (props) => {
    //Declare two state variables from props
    const setSearchTitle = props.setSearchTitle;
    const setSearchSeller = props.setSearchSeller;

    //Store the form's DOM Node in a variable 
    const searchForm = document.getElementById('searchForm')

    return (
        // Return a form which allows for two user inputs, a post title and a post seller, then store those inputs within state variables that we use to filter through allPosts
        // Upon clicking the clear button, reset the form inputs and change the stored values in state to empty strings
        <form id="searchForm" className="submissionForm" onSubmit={(event)=>{
            event.preventDefault();
            setSearchTitle("");
            setSearchSeller("");
            searchForm.reset();
        }}>
            <h2>Search: </h2>
            <label className='formLabel'>Title:
                <input type='text' name="title" onChange={(event)=>{
                    setSearchTitle(event.target.value)
                }}/>
            </label>
            <label className='formLabel'>Seller:
                <input type='text' name="seller" onChange={(event)=>{
                    setSearchSeller(event.target.value)
                }}/>
            </label>
            <button type="submit">Clear</button>
        </form>
    )
}

export default SearchForm