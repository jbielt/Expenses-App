import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 238.2, date: new Date(2022, 3, 3) },
    { title: "Car travels", amount: 40.8, date: new Date(2022, 3, 24) },
    { title: "Food", amount: 300, date: new Date(2022, 3, 11) },
    { title: "Others", amount: 132.5, date: new Date(2022, 3, 7) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
