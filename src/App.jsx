import Balance from "./components/Balance";
import Header from "./components/Header";
import Movements from "./components/Movements";
import Transaction from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    // <GlobalProvider>
    //   <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
    //     <div className="bg-zinc-800 p-10 rounded-lg flex">
    //       <div className="">
    //         <Header />
    //         <Movements />
    //         <Balance />
    //         <Transaction />
    //       </div>
    //       <TransactionList />
    //     </div>
    //   </div>
    // </GlobalProvider>
    <GlobalProvider>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center">
          <div className="bg-neutral-800 p-10 rounded-md w-full">
            <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <Movements />
                <Balance />
                <Transaction />
              </div>
              <div className="flex-1 flex flex-col">
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
      </GlobalProvider>

      )
}

      export default App;