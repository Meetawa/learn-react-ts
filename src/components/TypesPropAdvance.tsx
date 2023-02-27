type statusProps={
    status:string
}
const TypesPropAdvance = (props:statusProps) => {
    let message
    if(props.status==='loading'){
        message='loadong...'
    }
    else if(props.status=='success'){
        message='success...'
    }
    else if(props.status=='error'){
        message='Error...'
    }
    else{
        message='oops...'
    }
  return (
    <div>
        <h2>Status is : {message}</h2>
    </div>
   
  )
}

export default TypesPropAdvance
