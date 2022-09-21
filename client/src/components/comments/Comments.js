import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentSubject from './CommentSubject';


const Comments =() => {
 const [comments, setComments] = useState([])

  const { serviceId } = useParams()
  // const location = useLocation()

  // const { WorkerFirst_Name} = useLocation()

  useEffect( () => {
    axios.get(`/api/service//${serviceId}/comments`)
     . then ( res => setComments(res.data) )
     .catch(err => console.log(err))


  }, [])

  const addComment = (comment) => {
    axios.post(`/api/service/${serviceId}/comments`, {comment})
    .then ( res => setComments([ ... comments, res.data ]))
    .catch(err => console.log(err))

  }

  const updateComments = (id, comment) => {
    axios.put(`/api/service/${serviceId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = Comments.map( c => {
          if (c.id == id) {
            return res.data
          }
          return c
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err))
      
  }

  const deleteComment = (id) => {
    axios.delete(`/api/service/${serviceId}/comments/${id}`,)
      .then ( res => {
        setComments(comments.filter( c => c.id !== id))
      })
      .catch( err => console.log(err))
  }
  
  return (
    <>
      <CommentForm addComment={addComment} />
     <h1>Comments</h1>
     <CommentSubject
      comments={comments}
      updateComments={updateComments}
      />
    </>

  )

}

export default Comments;