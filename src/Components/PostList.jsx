import Post from "./Post"
import classes from "./PostList.module.css"
import { useLoaderData } from "react-router-dom";

function PostList() {
    const posts  = useLoaderData();
// let modalContent;
// if(isPosting) 
// {
//     modalContent = 
//     (<Modal OnClose={StopPosting}>
//     <NewPost Cancel = {StopPosting}  AddPost = {PostHandler}/>
//     </Modal>)
// }
return (
    <>
    {/* {isPosting ?  modalContent : false} */}
    {posts.length > 0 &&  (<ul className={classes.posts}>
        {posts.map((post)=> <Post id={post.id} key={post.id} name={post.Author}  body={post.body} />)}
    </ul>)}

    {posts.length ===0 && (<div className={classes.message}>
        <h2>There are no posts yet</h2>
        <p>try to add any one</p>
    </div>)}
    </>
)
}
export default PostList
