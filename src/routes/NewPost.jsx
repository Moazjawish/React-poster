import classes from "./NewPost.module.css"
// import { Modal } from "bootstrap";
import Modal from "../Components/Modal";
import { Link , Form , redirect } from "react-router-dom";

function NewPost() {

    return (
    <>
    <Modal>
    <Form method="post" className={classes.form} >
    <p>
    <label htmlFor="body">Text</label>
    <textarea id="body" name="body" required  rows={3} ></textarea>
    </p>
    <p>
        <label htmlFor="name">Your name</label>
        <input type="text" name="Author"  id="Author"  required/>
    </p>
    <p className={classes.actions}>
        <Link to=".." type="button" >Cancel</Link>
        <button >Submit</button>
    </p>
    </Form>
    </Modal>
    </>
)
}

export default NewPost
export async function action({request})
{
    const formData = await request.formData();
    const passedData = Object.fromEntries(formData);
    await fetch("http://localhost:8080/posts" , {
        method : "POST",
        body : JSON.stringify(passedData),
        headers: {
            'Content-type' : 'application/json' 
        },
    });

    return redirect('/');
}