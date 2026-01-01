import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const account = useSelector((state) => state.account);
  const transactions = useSelector((state) => state.transaction);

  return (
    <div className="container">
      <h1 className="text-primary">Account Details</h1>

      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th>Balance</th>
            <th>User Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{account.balance}</td>
            <td>{account.fullName}</td>
            <td>{account.mobile}</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-primary">Transaction Details</h1>

      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tr) => (
            <tr key={tr.id}>
              <td>{tr.id}</td>
              <td>{tr.amount}</td>
              <td className={tr.type === "Credit" ? "credit" : "debit"}>
                {tr.type}
              </td>
              <td>{tr.date.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Account);
