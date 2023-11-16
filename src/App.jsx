import Balance from "./components/Balance";
import Header from "./components/Header";
import Movements from "./components/Movements";
import Transaction from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800">
          <Header />
          <Movements />
          <Balance />
          <Transaction />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App;