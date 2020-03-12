import React from 'react';


const ReserveButton = (props) => {
  return (
    <div className="ReserveButtonContainer">
      <div className='ReserveButton'>
        <div id='reserve'>Reserve</div>
      </div>
      <div id='buttonmessage'>you won't be charged yet</div>
    </div>
  )
}

export default ReserveButton;