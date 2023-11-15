import Balance from "./components/Balance";
import Header from "./components/Header";
import Transaction from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Transaction/>
      <TransactionList/>
      <Balance/>
    </GlobalProvider>
  )
}

export default App;