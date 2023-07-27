import React from 'react'

interface Props {
  name: string
  age: number
}

const Person: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Person
