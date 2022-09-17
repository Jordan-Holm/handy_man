import ServiceShow from './ServiceShow';

const ServiceList = ({ services, updateService, deleteService }) => (
    <>
        {
            services.map( s =>
               <ServiceShow 
                key={s.id}
                {...s}
                updateService={updateService}
                deleteService={deleteService}
               /> 
            )
        }
    </>
)

export default ServiceList;