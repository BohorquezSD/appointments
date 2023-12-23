
function Patient({patient, setPatient, deletePatient}) {
    const {name, person, email, date, syntoms, id} = patient;
    const handleDelete = () => {
        const response = confirm('Quieres eliminar este paciente')
        if (response) {
            deletePatient(id)
        }
    }
  return (

    <div className='bg-white shadow-md rounded-lg py-10 px-5 m-3'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>
                    {name}
                </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>
                    {person}
                </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>
                    {email}
                </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha alta: {''}
                <span className='font-normal normal-case'>
                    {date}
                </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>
                    {syntoms}
                </span>
            </p>
            <div className="flex justify-between mt-10">
                <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    type="button"
                    onClick={() => setPatient(patient)}
                >
                    Editar
                </button>
                <button className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    type="button"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
  )
}

export default Patient