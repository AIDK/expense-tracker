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
  return (
    // create table to list expenses: table header (column headers), table body (expenses content), table footer (running total)
    <table className="table table-bordered">
      <thead>
        {/* Table header row with 4 columns */}
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>{/* Empty table header for delete button*/}</th>
        </tr>
      </thead>
      <tbody>
        {/* map expenses */}
        {expenses.map((e) => (
          <tr key={e.id}>
            <td>{e.description}</td>
            <td>{e.amount}</td>
            <td>{e.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(e.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {/* TODO: calculate running total */}
        <tr>
          <td>Total</td>
          <td>R0.00</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
