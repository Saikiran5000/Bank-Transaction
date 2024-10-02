

import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
    const data=useSelector((state)=>{
           return state
    })
  return (
    <>
      <div className='container'>

        <h1 className="text-primary">Account Details</h1>

        <table className="table table-bordered w-50">

            <thead>

                <tr>

                    <th>
                        Balance
                    </th>

                    <th>
                        User Name
                    </th>

                    <th>
                        Mobile
                    </th>

                </tr>
           </thead>

           <tbody>

                  <tr>

                    <td>{data.balance}</td>
                    <td>{data.fullName}</td>
                    <td>{data.mobile}</td>


                  </tr>


           </tbody>


        </table>





      </div>

    </>
  )
}

export default Account
