interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length < 1) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>There is nothing here</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Expense List</h2>
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
            {expenses.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>${item.amount.toFixed(2)}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger "
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                $
                {expenses
                  .reduce((accumulator, item) => item.amount + accumulator, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default ExpenseList;
