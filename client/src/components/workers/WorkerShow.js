import { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';

const WorkerShow = ({ id, first_name, last_name, position, updateWorker, deleteWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <WorkerForm 
            updateWorker={updateWorker}
            id={id}
            first_name={first_name}
            last_name={last_name}
            position={position}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {first_name} {last_name} {position}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/services`} //path of where its going to 
            // id the list id
            state={{ First_name: first_name, Last_Name: last_name}}
            // state only read only value to pass to the page
          >
            <button>Todos</button>
          </Link>
        </div>
      }
      <hr />
    </>
  )
}

export default WorkerShow;