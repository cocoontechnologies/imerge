import React from 'react'
import { imergeData } from '../assets/imergeData'

const Samples = () => {
  return (
    <div>
        <h1>Samples</h1>
        <h1>Mission:</h1>
        <p>{imergeData.companyStatement.mission}</p>
    </div>
  )
}

export { Samples }