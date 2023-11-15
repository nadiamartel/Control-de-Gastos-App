//voy a  usar este componente para eliminar las transacciones agregadas
import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {

    const { transactions, deleteTransaction } = useGlobalState();

    return (
        <div>
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
            <h5>Lista de transacciones</h5>
        </div>
    )
}

export default TransactionList;