import React, { useState, useEffect } from 'react'
import FilterPersons from './Components/FilterPersons'
import Personslist from './Components/Personslist'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  

  const addPerson = (event) => {
    event.preventDefault() 
    const personObjekt = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const foundname = persons.find(element => element.name === newName)

    if (foundname !== undefined){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObjekt))
    }
    setNewName('')
    setNewNumber('')
  }


  const handelNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handelNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const showFilteredPersons = () => {
    if (filter) {
      return persons.filter(el => el.name.includes(filter)).map(person => 
        <p key={person.id}>{person.id}. {person.name} {person.number}</p>
      )
    }
  }
  

  const addANew = () =>{
    return <form onSubmit={addPerson}>
    <div>
      name: <input 
      value={newName}
      onChange={handelNameChange}
      />
      <div>
        number: <input
        value={newNumber}
        onChange={handelNumberChange}
      />
      </div>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <FilterPersons 
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          {showFilteredPersons()}
        </div>
      <h2>add a new</h2>
        {addANew()}
      <h2>Numbers</h2>
      <div>
        <Personslist 
          persons={persons}
        />
      </div>
    </div>
  )
}




export default App