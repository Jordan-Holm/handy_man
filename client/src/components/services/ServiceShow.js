import { useState } from "react";
import ServiceForm from './ServiceForm';

const ServiceShow = ({ id, name, type, location, info, updateService, deleteService }) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            <h3>{type}</h3>
            <h4>{name}</h4>
            <h5>{location}</h5>
            <p>{info}</p>

            { editing ?
                <>
                    <ServiceForm 
                        id={id}
                        name={name}
                        type={type}
                        location={location}
                        info={info}
                        updateService={updateService}
                        setEdit={setEdit}
                    />
                    <button onClick={() => setEdit(false)}>
                        Cancel
                    </button>
                </>
                :
                <button onClick={() => setEdit(true)}>
                    Edit
                </button>
            }
            <button onClick={() => deleteService(id)}>
                Delete
            </button>
            <button>
                Comments
            </button>
        </>
    )
}

export default ServiceShow;