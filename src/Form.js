import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const handleDeposit = useCallback(() => {
    dispatch({ type: "deposit", payload: amount });
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        amount,
        type: "Credit",
        date: new Date()
      }
    });
    setAmount("");
  }, [dispatch, amount]);

  const handleWithdraw = useCallback(() => {
    dispatch({ type: "withdraw", payload: amount });
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        amount,
        type: "Debit",
        date: new Date()
      }
    });
    setAmount("");
  }, [dispatch, amount]);

  const handleNameUpdate = useCallback(() => {
    dispatch({ type: "nameUpdate", payload: fullName });
    setFullName("");
  }, [dispatch, fullName]);

  const handleMobileUpdate = useCallback(() => {
    dispatch({ type: "mobileUpdate", payload: mobile });
    setMobile("");
  }, [dispatch, mobile]);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-danger">Form</h1>

      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn btn-primary col-1" onClick={handleDeposit}>
          Deposit
        </button>

        <button className="btn btn-danger col-1 mx-2" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <button className="btn btn-primary col-1 mx-2" onClick={handleNameUpdate}>
          Update
        </button>
      </div>

      <div className="row mt-3">
        <div className="col-5">
          <input
            className="form-control"
            type="number"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <button className="btn btn-primary col-2" onClick={handleMobileUpdate}>
          Update Number
        </button>

        <button className="btn btn-danger col-1 mx-2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default React.memo(Form);
