import React from 'react';


const PaymentCalculator = (props) => {
  return (
    <div className="PaymentCalculator">
      <div className='rateLine'>
        <span className='calcLeft'>${props.price} x {props.nights} nights</span>
        <span className='calcRight'>${props.price * props.nights}</span>
      </div>
      <div className='serviceFeeLine'>
        <span className='calcLeft'>Service fee</span>
        <span className='calcRight'>${props.fee}</span>
      </div>
      <div className='totalLine'>
        <span className='calcLeft'>Total</span>
        <span className='calcRight'>${(props.price * props.nights) + props.fee}</span>
      </div>
    </div>
  )
}

export default PaymentCalculator;