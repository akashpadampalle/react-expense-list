import { useState } from "react";

interface Props {
  expenseList: { description: string; amount: number; category: number }[];
  onDeleteItem: (index: number) => void;
  categories: string[];
}

function ExpenseList({ expenseList, onDeleteItem, categories }: Props) {
  const [localCategory, setLocalCategory] = useState(0);

  if (expenseList.length < 1) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>There is nothing here</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Expense List</h2>
        <div className="mb-3">
          <select
            className="form-select"
            onChange={(event) => {
              setLocalCategory(parseInt(event.target.value));
            }}
          >
            {categories.map((item, index) => {
              return (
                <option value={index} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map((item, index) => {
              if (localCategory != 0 && localCategory != index) {
                return null;
              }

              return (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td> ${item.amount}</td>
                  <td>{categories[item.category]}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger "
                      onClick={() => onDeleteItem(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                $
                {expenseList.reduce((accumulator, item, index) => {
                  if (localCategory != 0 && localCategory != index) {
                    return accumulator;
                  } else {
                    return (accumulator += item.amount);
                  }
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ExpenseList;
