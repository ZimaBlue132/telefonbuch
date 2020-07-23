import React from 'react'

const Personslist = ({persons}) => {
    return persons.map(person => 
    <p key={person.id}>{person.id}. {person.name} {person.number}</p>
    )
  }

export default Personslist