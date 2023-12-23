import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"
function App() {

  const [patients, setPatients] = useState([])
  
  return (
    <div className="container mx-auto mt-20">
        <Header name="Veterinarios"/>
        <div className="mt-12 flex">
          <Form 
            patients={patients} 
            setPatients={setPatients}/>
          <PatientList />
        </div>
    </div>
  )
} 

export default App
