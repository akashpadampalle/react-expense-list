import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";

function App() {
  const categories = ["all", "grocery", "meal", "entertainment"];
  const handleFormData = (data: {
    description: string;
    amount: number;
    category: number;
  }) => {
    console.log(data);
  };

  return (
    <>
      <Form categories={categories} getformData={handleFormData} />
    </>
  );
}

export default App;
