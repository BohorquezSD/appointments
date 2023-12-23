import Patient from "./Patient"



function PatientList() {
  return (
    <div className='md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll'>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10 '>
            Administra tus {" "}
            <span className='text-blue-500 font-bold mt-5 text-center'>
                pacientes
            </span>{" "}
        </p>
        <Patient/>
        <Patient/>
        <Patient/>
        
    </div>
  )
}

export default PatientList