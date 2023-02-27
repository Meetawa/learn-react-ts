import React from 'react'
type PersonNameList={
    names:{
        first:string
        last:string
    }[]
}
const TypesPropsListObjects = (props:PersonNameList) => {
  return (
    <div>
      {
      props.names.map(name=>{
        return <h1>{name.first} {name.last}</h1>
    })
    }
    </div>
  )
}

export default TypesPropsListObjects;

