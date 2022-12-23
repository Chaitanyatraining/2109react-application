import React from 'react'
import { UserContext } from '../../../App'

function CompA() {
  return (
    <div>
        <h2>CompA</h2>
        <UserContext.Consumer>
            {value =><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default CompA