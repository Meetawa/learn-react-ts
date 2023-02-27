type PersonNames={
    name :{
        first:string
        last:string
    }
}
const TypesPropsBasic = (props:PersonNames) => {
  return (
    <h1>
    {props.name.first} {props.name.last}
    </h1>
  )
}

export default TypesPropsBasic;
