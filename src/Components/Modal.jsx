import classes from "./Modal.module.css"
import { useNavigate } from "react-router-dom"
function Modal({children }) {
  const navigate = useNavigate();
  function CloseHandler()
  {
    navigate("..");
  }
  return (
    <>
    <div className={classes.backdrop} onClick={CloseHandler}/>
    <dialog open className={classes.modal}>{children}</dialog>
    </>
  )
}

export default Modal
