import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Text } from "./components/Text"; // created named component as test for headings

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // build expenses list just to have something show on screen when page loads
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Water", amount: 35, category: "Utilities" },
    { id: 2, description: "Electricity", amount: 50, category: "Utilities" },
    { id: 3, description: "Movies", amount: 30, category: "Entertainment" },
    { id: 4, description: "Food", amount: 60, category: "Groceries" },
    { id: 5, description: "Snacks", amount: 5, category: "Groceries" },
    { id: 6, description: "Netflix", amount: 10, category: "Entertainment" },
  ]);

  // filter expenses based on selected category
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <Text variant="medium/normal">Form Details:</Text>
      <div className="mb-5">
        {/* we have to copy the entire expenses array so that when we add a new item we do not replace the existing items, 
        then we have to copy the new expense we adding to get it's properties and then 
        we set the new expense id to the max length of the array + 1 */}
        <ExpenseForm
          onSubmit={(e) =>
            setExpenses([...expenses, { ...e, id: expenses.length + 1 }])
          }
        />
      </div>
      <Text variant="medium/normal">Expenses List:</Text>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={visibleExpenses} // pass the filtered expenses list
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} // filter expenses list by excluding the `removed` expense
        />
      </div>
    </div>
  );
}

export default App;
