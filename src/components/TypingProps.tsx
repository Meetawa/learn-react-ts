import React from 'react'
type GreetProps={
  name:string
  rollno:number
  Age:boolean
}
const TypingProps=(props:GreetProps)=> {
  return (
    <h1>Name is :{props.name} and Roll no . is {props.rollno} 18 plus {props.Age}</h1>
  )
}

export default TypingProps;

