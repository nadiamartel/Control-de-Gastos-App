import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {

    const { deleteTransaction } = useGlobalState();

    return (
        <section>
            <p>{transaction.description}</p>
            <span>{transaction.amount}</span>
            <button onClick={() => {
                deleteTransaction(transaction.id);
            }}>
                x
            </button>
        </section>
    )
}

export default TransactionItem;