import { useGlobalState } from "../context/GlobalState";

function Balance(){
    
    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((accumulated, item) => (accumulated +=item), 0) //cero como valor inicial, ver el comportamiento del array
    
    return(
        <div className="flex justify-between items-center my-2">
            <h4 className="text-slate-400">Balance</h4>
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    )
}

export default Balance;