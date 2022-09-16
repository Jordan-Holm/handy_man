import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerForm from './WorkerForm';
import AllWorker from './AllWorker';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => setWorkers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => setWorkers([...workers, res.data]))
      .catch( err => console.log(err))
  }

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker })
      .then( res => {
        const newUpdatedWorkers = workers.map( w => {
          if (w.id == id) {
            return res.data
          }
          return w
        })
        setWorkers(newUpdatedWorkers)
      })
      .catch( err => console.log(err))
  }

  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        setWorkers(workers.filter( w => w.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <ListForm addWorker={addWorker} />
      <h1>All Workers</h1>
      <AllList 
        workers={workers}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    </>
  )
}

export default Workers;