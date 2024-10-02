
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
   const  [amount,setAmount]=useState("");
   const [fullName,setFullName]=useState("");
   const [mobile,setMobile]=useState("");


    let dispatch= useDispatch();

  return (

    
    <>
    <div className="container">
      <h1 className="text-danger">Form</h1>
      <div className="row">
        <div  className='col-4'>
        <input className="form-control" type="number" placeholder="Enter Amount"
             value={amount}   onChange={(e)=>{
               let val= e.target.value;
               setAmount(val)

             }}            />
        </div>

        <button className='btn btn-primary col-1' onClick={()=>{
            dispatch({type:"deposit",payload: amount});
            setAmount("")
        }}>Deposit</button>

<button className='btn btn-danger col-1 mx-2' onClick={()=>{
            dispatch({type:"withdraw",payload: amount});
            setAmount("")
        }}>Withdraw</button>

        
<div className="row">
        <div  className='col-4'>
        <input className="form-control" type="text" placeholder="Enter FullNAME"
             value={fullName}   onChange={(e)=>{
               let val= e.target.value;
               setFullName(val)

             }}            />
        </div>

        <button className='btn btn-primary col-1 mx-2' onClick={()=>{
            dispatch({type:"nameUpdate",payload: fullName});
            setFullName("")
        }}>Update</button>


<div className="row">
        <div  className='col-5'>
        <input className="form-control" type="number" placeholder="Enter Mobile Number"
             value={mobile}   onChange={(e)=>{
               let val= e.target.value;
               setMobile(val)

             }}            />
        </div>

        <button className='btn btn-primary col-1' onClick={()=>{
            dispatch({type:"mobileUpdate",payload: mobile});
            setMobile("")
        }}>Update Number</button>

<button className='btn btn-danger col-1' onClick={()=>{
            dispatch({type:"reset"});
            setMobile("")
        }}>Reset</button>


</div>
</div>
      </div>
       </div>
    </>
  )
}

export default Form
