import React from 'react'


const FilterPersons = ({filter, setFilter}) => {
    return <div>
            filter shown with <input
             value={filter}
            onChange={(event) => setFilter(event.target.value)}
            />
          </div>
  }

  export default FilterPersons