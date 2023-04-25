import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectCategory, setSelectedCategory] = useState("");
  return (
    <div className="mb-3">
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
    </div>
  );
}

export default App;
