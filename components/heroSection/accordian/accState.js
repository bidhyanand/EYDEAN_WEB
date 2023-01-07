import { useState } from 'react'
import AccContext from './context';

const AccState = (props) =>{
  const backgroundImage = {
    "background-image" : " hgfhg",
  }
const [accIndex,setAccIndex] = useState(0);

  return(
    <AccContext.Provider value={{accIndex,setAccIndex}} >
      {props.children}
    </AccContext.Provider>
  )
}
export default AccState;