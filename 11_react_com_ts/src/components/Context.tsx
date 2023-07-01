import React, {useContext} from 'react'
import { AppContext } from '../App'

const Context = () => {

    const details = useContext(AppContext)

    
  return (
    <>
        {details && (
            <>
                <p>Linguagem: {details.language}</p>
                <p>Linguagem: {details.framework}</p>
                <p>Linguagem: {details.projects}</p>
            </>
        )}
    </>
  )
}

export default Context