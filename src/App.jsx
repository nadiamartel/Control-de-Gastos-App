import Balance from "./components/Balance";
import Header from "./components/Header";
import Transaction from "./components/TransactionForm";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Transaction/>
      <Balance/>
      <h3>Que esta paasaaandaaa?</h3>
    </GlobalProvider>
  )
}

export default App;