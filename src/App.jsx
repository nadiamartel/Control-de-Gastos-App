import Balance from "./components/Balance";
import Header from "./components/Header";
import Movements from "./components/Movements";
import Transaction from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Movements/>
      <Balance/>
      <Transaction/>
      <TransactionList/>
    </GlobalProvider>
  )
}

export default App;