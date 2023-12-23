import {useState, useEffect} from 'react'
import Error from './Error'

function Form({patients, setPatients, patient, setPatient}) {
    const [name, setName] = useState("")
    const [person, setPerson] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [syntoms, setSyntoms] = useState("")

    const [errors, setErrors] = useState(false)

    useEffect(() => {
        if( Object.keys(patient).length > 0 ) {
            setName(patient.name)
            setPerson(patient.person)
            setEmail(patient.email)
            setDate(patient.date)
            setSyntoms(patient.syntoms)
        }
    },[patient])

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([name, person, email, date, syntoms].includes("")){
            console.log("Please enter")
            setErrors(true);
            return;
        }
        setErrors(false);
        const objectPatient = {
            name,
            person,
            email,
            date,
            syntoms
        }

        if (patient.id){
            objectPatient.id = patient.id
            const updatedPatients = patients.map((patientState) => patientState.id === patient.id ? objectPatient : patientState)
            setPatients(updatedPatients)
            setPatient({})
        }else{
            objectPatient.id = generateId()
            setPatients([...patients, objectPatient])
        }
        
        setName("")
        setPerson("")
        setEmail("")
        setDate("")
        setSyntoms("")
    }

    return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
            Seguimiento de pacientes
        </h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Añade pacientes {" "}
            <span className='text-blue-500 font-bold mt-5 text-center'>
                administralos
            </span>{" "}
        </p>
        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-5' 
            onSubmit={handleSubmit}>
                { errors && <Error><p>Todos los campos son obligatorios</p></Error>}
            <div className='mb-5'>
                <label htmlFor='pet' className='block text-gray-700 uppercase font-bold'>
                     Nombre de la mascota
                </label>
                <input
                    id='pet'
                    type="text"
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    />
                    
            </div>
            <div className='mb-5'>
                <label htmlFor='person' className='block text-gray-700 uppercase font-bold'>
                     Nombre del propietario
                </label>
                <input
                    id='person'
                    type="text"
                    placeholder='Nombre del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={person}
                    onChange={(e) => {setPerson(e.target.value)}}
                />
                    
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                     Email
                </label>
                <input
                    id='email'
                    type="text"
                    placeholder='Email'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='date' className='block text-gray-700 uppercase font-bold'>
                     Fecha alta
                </label>
                <input
                    id='date'
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='syntoms' className='block text-gray-700 uppercase font-bold'>
                     Síntomas
                </label>
                < textarea
                    id='syntoms'
                    placeholder="sintomas"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={syntoms}
                    onChange={(e) => {setSyntoms(e.target.value)}}
                />
            </div>
            <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 text-cyan-50 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                value={patient.id ? "Editar paciente": "Agregar paciente"}/>
        </form>
    </div>
  )
}


export default Form
