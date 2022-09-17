import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, name, type, location, info, setEdit, updateService}) => {
    const [service, setService] = useState({ name: '', type: '', location: '', info: '' })

    useEffect( () => {
        if (id) {
            setService({ name, type, location, info })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateService(id, service)
            setEdit(false)
        } else {
            addService(service)
        }
        setService({ name: '', type: '', location: '', info: '' })
    }

    return(
        <>
            <h2>{id ? 'Edit' : 'Create'} Service</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name='name'
                    value={service.name}
                    onChange={(e) => setService({ ...service, name: e.target.value })}
                    required
                    placeholder='Service Name'
                />
                <input 
                    name='type'
                    value={service.type}
                    onChange={(e) => setService({ ...service, type: e.target.value })}
                    required
                    placeholder='Service Type'
                />
                <input 
                    name='location'
                    value={service.location}
                    onChange={(e) => setService({ ...service, location: e.target.value })}
                    required
                    placeholder='Service Location'
                />
                <textarea
                    name='info'
                    value={service.info}
                    onChange={(e) => setService({ ...service, info: e.target.value })}
                    required
                    placeholder='Service Information'
                />
            </form>
        </>
    )
}

export default ServiceForm;