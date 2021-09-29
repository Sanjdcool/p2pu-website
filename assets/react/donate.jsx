import React, {useState} from "react";
import ReactDOM from "react-dom";

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });


const Donate = props => {
  const [amount, setAmount] = useState();

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <form onSubmit={(e)=>{e.preventDefault()}} className="row g-3">
      <h3>Choose an amount to give:</h3>
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a href="#" onClick={()=>setAmount(25)} className="btn bg-gray text-white col-12">$25</a>
      </div>
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a href="#" onClick={()=>setAmount(50)} className="btn bg-gray text-white col-12">$50</a>
      </div>
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a href="#" onClick={()=>setAmount(100)} className="btn bg-gray text-white col-12">$100</a>
      </div>
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a href="#" onClick={()=>setAmount(200)} className="btn bg-gray text-white col-12">$200</a>
      </div>
      <div className="col-12 col-md-8 col-lg-12 col-xl-8">
        <div className="btn bg-gray text-white input-group d-flex align-items-center">
          <span className="input-group-donation" id="dollar">$</span>
          <input type="text" className="form-control dark" placeholder="other amount" aria-label="other amount" aria-describedby="dollar" onChange={(e)=>setAmount(e.target.value)} value={amount} />
        </div>
      </div>
      <div className="col-12">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          style={{
            layout: 'vertical',
            color:  'black',
            shape:  'rect',
            label:  'donate'
          }}
        />
      </div>
    </form>
  );
}

ReactDOM.render(
  <Donate />,
  document.getElementById('donation-form-react')
);


