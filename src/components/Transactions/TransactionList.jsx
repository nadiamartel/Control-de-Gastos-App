//voy a  usar este componente para eliminar las transacciones agregadas
import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem"

function TransactionList() {

    const { transactions } = useGlobalState();

    return (
        <div>
            <h4>Lista de transacciones:</h4>
            <ul>
                {
                    transactions.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TransactionList;