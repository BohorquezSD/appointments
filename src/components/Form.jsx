import React from 'react'

function Form() {
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
        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-5' >
            <div className='mb-5'>
                <label htmlFor='pet' className='block text-gray-700 uppercase font-bold'>
                     Nombre de la mascota
                </label>
                <input
                    id='pet'
                    type="text"
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            <div className='mb-5'>
                <label htmlFor='person' className='block text-gray-700 uppercase font-bold'>
                     Nombre del propietario
                </label>
                <input
                    id='person'
                    type="text"
                    placeholder='Nombre del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                     Email
                </label>
                <input
                    id='email'
                    type="text"
                    placeholder='Email'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            <div className='mb-5'>
                <label htmlFor='date' className='block text-gray-700 uppercase font-bold'>
                     Fecha alta
                </label>
                <input
                    id='date'
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            <div className='mb-5'>
                <label htmlFor='person' className='block text-gray-700 uppercase font-bold'>
                     Síntomas
                </label>
                < textarea
                    id='person'
                    placeholder="sintomas"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 text-cyan-50 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                value="Agregar paciente"/>
        </form>
    </div>
  )
}


export default Form
