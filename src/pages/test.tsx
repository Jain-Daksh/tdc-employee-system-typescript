import React from 'react'

interface Props {
  name: string
  age: number
}

const Person: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  )
}

export default Person
