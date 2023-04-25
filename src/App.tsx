import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // build expenses list just to have something show on screen when page loads
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Water", amount: 35, category: "Utilities" },
    { id: 1, description: "Electricity", amount: 50, category: "Utilities" },
    { id: 2, description: "Movies", amount: 30, category: "Entertainment" },
    { id: 3, description: "Food", amount: 60, category: "Groceries" },
    { id: 4, description: "Snacks", amount: 5, category: "Groceries" },
    { id: 5, description: "Netflix", amount: 10, category: "Entertainment" },
  ]);

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(e) =>
            setExpenses([...expenses, { ...e, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
    </div>
  );
}

export default App;
