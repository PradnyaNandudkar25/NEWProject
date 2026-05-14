import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Myapp() {
  const [balance, setBalance] = useState(0);
  const [newBalance, setNewBalance] = useState("");
  const [transactions, setTransactions] = useState([]);

  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({
    purpose: "",
    category: "Shopping",
    sum: "",
    date: "",
  });

  const handleAddTransaction = () => {
    if (!form.purpose || !form.sum || !form.date) {
      alert("Please fill all fields!");
      return;
    }

    // Convert sum to number and handle expense/income
    const transaction = {
      id: Date.now(),
      purpose: form.purpose,
      category: form.category,
      sum: Number(form.sum),
      date: form.date,
    };

    setTransactions([...transactions, transaction]);
    setForm({ purpose: "", category: "Shopping", sum: "", date: "" });
  };

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.category === filter);

  const totalByCategory = (category) =>
    transactions
      .filter((t) => t.category === category)
      .reduce((acc, t) => acc + Number(t.sum), 0);

      
const totalExpenditure = transactions.reduce(
    (acc, t) => acc + Number(t.sum),
    0
  );
const currentBalance = balance - totalExpenditure;



  return (
    <div className="container my-4">
      <h2 className="mb-4">Financial Overview</h2>

      {/* BALANCE + CATEGORIES */}
      <div className="row text-white">
        <div className="col-md-3 mb-3">
          <div className="card bg-dark p-2 text-white">
            <h5>Balance</h5>
            <h6>₹{currentBalance}</h6>
            <div className="input-group input-group-sm">
              <input type="text" placeholder="Enter balance" value={newBalance} onChange={(e) => setNewBalance(e.target.value)}/>

              <button className="btn btn-dark" onClick={() => {setBalance(Number(newBalance));
                                                               setNewBalance("");}}>Set </button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card bg-primary p-4 text-white">
            <h5>Shopping</h5>
            <h6>₹{Math.abs(totalByCategory("Shopping"))}</h6>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card bg-warning p-4 text-dark">
            <h5>Food & Drinks</h5>
            <h6>₹{Math.abs(totalByCategory("Food"))}</h6>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card bg-dark p-4 text-white">
            <h5>Others</h5>
            <h6>₹{Math.abs(totalByCategory("Others"))}</h6>
          </div>
        </div>
      </div>


      {/* TRANSACTIONS + ADD EXPENDITURE side-by-side */}
      <div className="row mt-4">
        {/* Left Side - Transactions */}
        <div className="col-md-7">
          <div className="card p-3 h-100">
            <div className="mb-3">
              <h4 className="mb-1">Recent Transactions</h4>
              <div className="d-flex align-items-center">
                <label className="me-2 mb-0 fw-semibold small">Filter:</label>
                <select className="form-select-sm w-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option>All</option>
                  <option>Income</option>
                  <option>Food</option>
                  <option>Shopping</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            {filteredTransactions.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Category</th>
                    <th>Sum</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((t) => (
                    <tr key={t.id}>
                      <td>{t.purpose}</td>
                      <td>{t.category}</td>
                      <td class="text-danger">₹-{t.sum}</td>
                      <td>{t.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-muted text-center mb-0">No transactions yet.</p>
            )}
          </div>
        </div>

        <div className="col-md-5">
          <div className="card p-3 h-100">
            <h4 className="mb-2">Add Expenditure</h4>

            <div className="d-flex gap-2 flex-wrap">
            <input type="text" className="form-control" placeholder="Purpose" value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })}/>

            <input type="number" className="form-control" placeholder="₹" value={form.sum} onChange={(e) => setForm({ ...form, sum: e.target.value })}/>

            <input type="date" className="form-control" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}/>

              <select
                className="form-select"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}>
                <option>Shopping</option>
                <option>Food</option>
                <option>Others</option>
              </select>

              <button className="btn btn-dark form-select" onClick={handleAddTransaction}>
                Add transaction
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Myapp; 