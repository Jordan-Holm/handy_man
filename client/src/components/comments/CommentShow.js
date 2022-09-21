import { useState } from "react";
import CommentForm from "./CommentForm";


const CommentShow = ({id, title, desc, updateComment, deleteComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {editing ?
        <>
          <CommentForm
            updateComment={updateComment}
            id={id}
            title={title}
            desc={desc}
            setEdit={setEdit}  
          
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        : 
        <div>
          <h1> {title} {desc}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteComment(id)}>
            Delete
            </button>
        </div>
      }
      <hr />
    </>

  )
    

}

export default CommentShow;