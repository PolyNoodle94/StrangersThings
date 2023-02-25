import React, {useState} from "react"
import { createNewPost } from "../api-adapters"
import { useNavigate } from "react-router-dom"

const AddPost = (props) => {

    const getPosts = props.getPosts

    let title = ''
    let description = ''
    let price = ''
    let location = ''
    let willDeliver = false

    let addPostForm = document.getElementById('addPostForm')

    let willDeliverButton = document.getElementById('willDeliverCheckbox')


    
    return(
        <form id="addPostForm" className="submissionForm" onSubmit={async (event) => {

            event.preventDefault()
            //Since the add New Post form is in the same page as the post display, we will need to add it to state since thats the only way the useEffect will rerender
            //and return a new set of posts...

            //Something we might want to do since the height of the form is fit-content: find a CSS thing to let input boxes stretch out rather than their width and height remaining
            //constant no matter how much the user types
            console.log(`${title} ${description} ${price} ${location} ${willDeliver}`)

            await createNewPost(title, description, price, location, willDeliver)

            getPosts()

            addPostForm.reset()

            title = ''
            description = ''
            price = ''
            location = ''
            willDeliverButton.checked = false;
            willDeliver = willDeliverButton.checked

        }}>

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
                    <input id="willDeliverCheckbox" type="checkbox" onChange={() => {

                        willDeliver = willDeliverButton.checked

                    }}/> 
                    Will Deliver
                </div>

            </label>

            <input className="butt" type="submit" value="Add New Post" ></input>

            


        </form>

    )


}

export default AddPost