import { useGlobalState } from "../context/GlobalState";

function Balance(){
    
    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((accumulated, item) => (accumulated +=item), 0) //cero como valor inicial, ver el comportamiento del array
    
    return(
        <div>
            <h4>Balance</h4>
            <h2>${total}</h2>
        </div>
    )
}

export default Balance;