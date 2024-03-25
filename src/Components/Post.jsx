import classes from "./Post.module.css"
import { Link } from "react-router-dom";
function Post({id , name , body})
{
    return(
    <li className={classes.post}>
    <Link to={id}>
    <h2 className={classes.author}>{name}</h2>
    <p  className={classes.text}>{body}</p>
    </Link>
    </li>
    )

}
export default Post;