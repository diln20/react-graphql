import reactLogo from './assets/react.svg'
import './App.css'
import Persons from './Persons'
import { PersonForm } from './PersonForm'
import { ALL_PERSONS } from './persons/graphql-queries'
import { usePersons } from './persons/custom-hooks'
import { Notify } from './Notify'
import { useState } from 'react'
import { PhoneForm } from './PhoneForm'
import { DeleteForm } from './deleteForm'
import { EditForm } from './EditForm'

function App() {
  const { data, loading, error } = usePersons(ALL_PERSONS)
  const [errorMessage, setErrorMessage] = useState(null)
  if (error) return <span style='color:red'>{error}</span>

  const notifyError = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <div className="App">
      <Notify errorMessage={errorMessage}></Notify>
      <header className='App-header'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        {
          loading ? <p>Loading...</p>
            : <Persons persons={data?.allPersons}/>        
        }
      </header>
      <PhoneForm notifyError={notifyError}></PhoneForm>
      <PersonForm notifyError={notifyError}></PersonForm>
      <DeleteForm notifyError={notifyError}></DeleteForm>
      <EditForm notifyError={notifyError}></EditForm>
    
    </div>
  )
}

export default App
