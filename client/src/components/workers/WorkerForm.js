import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, first_name, last_name, position, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ first_name: '', last_name: '', psoition: '' })

  useEffect( () => {
    if (id) {
      setList({ first_name, last_name, position })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ first_name: '', last_name: '', position: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} Worker</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='first_name'
          value={worker.firts_name}
          onChange={(e) => setWorker({ ...worker, first_name: e.target.value })}
          required
          placeholder='First name'
        />
        <textarea
          name='last_name'
          value={worker.last_name}
          onChange={(e) => setWorker({ ...worker, last_name: e.target.value })}
          required
          placeholder='Last name'
        ></textarea>
        <textarea
          name='position'
          value={worker.position}
          onChange={(e) => setWorker({ ...worker, position: e.target.value })}
          required
          placeholder='Position'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;