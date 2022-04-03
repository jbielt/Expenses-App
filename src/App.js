import Expenses from "./components/Expenses/Expenses";

function App(props) {
  const expenses = [
    { title: "Toilet Paper", amount: 238.2, date: new Date(2022, 3, 3) },
    { title: "Car travels", amount: 40.8, date: new Date(2022, 3, 24) },
    { title: "Food", amount: 300, date: new Date(2022, 3, 11) },
    { title: "Others", amount: 132.5, date: new Date(2022, 3, 7) },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
