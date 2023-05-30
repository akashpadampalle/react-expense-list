import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const categories = ["all", "grocery", "meal", "entertainment"];

  interface listItem {
    description: string;
    amount: number;
    category: number;
  }

  const handleFormData = (data: listItem) => {
    setExpenseList([...expensList, data]);
  };

  const [expensList, setExpenseList] = useState<listItem[]>([]);
  const onDeleteItem = (index: number) => {
    const newExpenseList = expensList.filter((item, i) => index != i);
    setExpenseList(newExpenseList);
  };

  return (
    <>
      <Form categories={categories} getformData={handleFormData} />
      <hr />
      <ExpenseList
        expenseList={expensList}
        onDeleteItem={onDeleteItem}
        categories={categories}
      />
    </>
  );
}

export default App;
