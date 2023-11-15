//voy a  usar este componente para eliminar las transacciones agregadas
import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {

    const { transactions, deleteTransaction } = useGlobalState();

    return (
        <div>
            <h4>Lista de transacciones:</h4>
            {
                transactions.map(transaction => (
                    <section key={transaction.id}>
                        <p>{transaction.description}</p>
                        <span>{transaction.amount}</span>
                        <button onClick={() => {
                            deleteTransaction(transaction.id);
                        }}>
                            x
                        </button>
                    </section>
                ))
            }
        </div>
    )
}

export default TransactionList;