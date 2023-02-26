import React from "react"
import { createNewPost } from "../api-adapters"


const AddPost = (props) => {

    //Declare two state variables from props. If we are in Posts page, only getPosts is passed down. If we are in Profile, only getUserData gets passed down
    const getPosts = props.getPosts;
    const getUserData = props.getUserData;

    //Declare variables used to store user inputs
    let title = ''
    let description = ''
    let price = ''
    let location = ''
    let willDeliver = false

    //Store the forms Node in a variable
    const addPostForm = document.getElementById('addPostForm')

    //Store the checkbox button's Node in a variable
    const willDeliverButton = document.getElementById('willDeliverCheckbox')


    
    return(
        // Create form that takes 5 user inputs, which onSubmit, creates a new post
        <form id="addPostForm" className="submissionForm" onSubmit={async (event) => {

            event.preventDefault()

            await createNewPost(title, description, price, location, willDeliver)

            if (getPosts) {
                getPosts();
            }
            else {
                getUserData();
            }

            addPostForm.reset()

            title = ''
            description = ''
            price = ''
            location = ''
            willDeliverButton.checked = false;
            willDeliver = willDeliverButton.checked

        }}>
            <h2>Create Post:</h2>

            <label className="formLabel">
                Title: 
                <input type="text" defaultValue={title} name="title" onChange={(event)=>{

                    title = event.target.value

                }}></input>
            </label>

            <label className="formLabel">
                Description:  
                <input type="text" defaultValue={description} name="description" onChange={(event)=>{

                    description = event.target.value

                }}></input>
            </label>
            
            <label className="formLabel">
                Price:  
                <input type="text" defaultValue={price} name="price" onChange={(event)=>{

                    price = event.target.value

                }}></input>
            </label>

            <label className="formLabel">
                Location:  
                <input type="text" defaultValue={location} name="location" onChange={(event)=>{

                    location = event.target.value

                }}></input>
            </label>

            <label className="formLabel" >
                    
                <div id="willDeliverInputContainer">
                    Will Deliver:
                    <input id="willDeliverCheckbox" type="checkbox" onChange={() => {

                        willDeliver = willDeliverButton.checked

                    }}/> 
                </div>

            </label>

            <input className="butt" type="submit" value="Add New Post" ></input>

            


        </form>

    )


}

export default AddPost