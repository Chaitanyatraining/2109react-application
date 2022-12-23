import React from 'react'
import { UserContext } from '../../../App'

function CompC() {
  return (
    <div>
        <h2>CompC</h2>
        <UserContext.Consumer>
            {value =><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default CompC