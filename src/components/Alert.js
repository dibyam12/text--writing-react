import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'35px'}}>
  {  props.alert && <div>
       <div className={`alert alert-${props.alert.type} alert-warning alert-dismissible fade show`} role="alert" style={{height:'35px',
      padding:'5px'}}>
<strong>{props.alert.type}</strong> : {props.alert.msg}
</div>
    </div>}
    </div>
  )
}

export default Alert