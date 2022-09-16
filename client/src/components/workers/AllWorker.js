import WorkerShow from './WorkerShow';

const AllWorker = ({ workers, updateWorker, deleteWorker }) => (
  <>
    {
      workers.map( w => 
        <WorkerShow
          key={w.id}
          // id={l.id} title={l.title} desc={l.desc}
          {...w}
          updateWorker={updateWorker}
          deleteWorker={deleteWorker}
        />
      )
    }
  </>
)

export default AllWorker;