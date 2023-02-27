type PersonNames={
    name :{
        first:string
        last:string
    }
}
const TypesPropsBasic = (props:PersonNames) => {
  return (
    <div>
    {props.name.first}{props.name.last}
    </div>
  )
}

export default TypesPropsBasic
